import {Machine, assign, spawn} from 'xstate'
import { resolveActions } from 'xstate/lib/actions'
import createGenreMachine from '../machines/createGenreMachine'

const appMachine = Machine({
    id: 'app',
    initial: 'idle',
    context: {
        genre: null,
        genres: {}
    },
    states: {
        idle: {

        },
        selected: {

        }
    },
    on: {
        SELECT: {
            target: '.selected',
            // try without . (internal transition)
            actions: assign((context, event) => {
                console.log(event, '!!!!!!!!!!!! event !!!!!!')
                // subreddit: (context, event)  => event.name
                let genre = context.genres[event.name]
                if(genre) {
                    // try returning without context
                    // returning just subr dosehnt make a diff
                    return {
                        ...context,
                        genre
                    }
                }
                genre = spawn(createGenreMachine(event.name))
                console.log(genre)
                return {
                    genres: {
                        ...context.genres,
                        [event.name]: genre
                    },
                    genre
                }
            })
        }
    }
})
export default appMachine