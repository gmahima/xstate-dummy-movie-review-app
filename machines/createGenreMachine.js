import {Machine, assign} from 'xstate'
import movies from '../public/movies'

const fetchGenreMovies = (context) => {
    return new Promise((resolve, reject) => {
        if(context.genre === 'all') {
            setTimeout(resolve(movies), 10000)
        }
        else {
            const filteredMovies = movies.filter(m => m.genre.includes(context.genre))
            console.log(filteredMovies)
            setTimeout(resolve(filteredMovies), 10000)
        }
    }) 
}
const createGenreMachine = (genre) => {
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