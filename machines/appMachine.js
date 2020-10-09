import {Machine, assign} from 'xstate'
import movies from '../public/movies'
const fetchGenreMovies = (context) => {
        return new Promise((resolve, reject) => {
            if(context.genre === 'all') {
                setTimeout(resolve(movies), 10000)
            }
            else {
                setTimeout(reject("error"), 2000)
            }
        }) 
}

const appMachine = Machine({
    id: 'app',
    context: {
        genre: 'all'
    },
    initial: 'selected',
    states: {
        selected: {
            initial: 'loading',
            states: {
                loading: {
                    invoke: {
                        id: 'fetch-genre-movies',
                        src: fetchGenreMovies,
                        onDone: {
                            target: 'loaded',
                            actions: assign({
                                movies: (context, event) => (event.data)
                            })
                        },
                        onError: 'failed'
                    }
                },
                loaded: {},
                failed: {}
            }
        }
    }
})

export default appMachine