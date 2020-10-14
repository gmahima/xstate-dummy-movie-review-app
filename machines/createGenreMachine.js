import {Machine, assign} from 'xstate'
import movies from '../public/movies'

const fetchGenreMovies = (context) => {
    return new Promise((resolve, reject) => {
        if(context.genre === 'all') {
            setTimeout(resolve(movies), 10000)
        }
        else {
            setTimeout(resolve(movies => movies.filter(m => m.genre.includes(context.genre))), 10000)
        }
    }) 
}
const createGenreMachine = (genre) => {
    console.log(genre)
    console.log("hi!!!!!!")
    return Machine({
        id: 'genre',
        initial: 'loading',
        context: {
            genre: genre,
            movies: []
        },
        states: {
            loading: {
                invoke: {
                    id: 'fetch-genre-movies',
                    src: fetchGenreMovies,
                    onDone: {
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
    })
}
export default createGenreMachine