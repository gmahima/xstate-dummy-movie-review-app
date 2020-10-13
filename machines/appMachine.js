// import {Machine, assign, spawn} from 'xstate'
// import movies from '../public/movies'
// import createGenreMachine from './createGenreMachine'


// const appMachine = Machine({
//     id: 'app',
//     context: {
//         genre: 'all',
//         genres: {}
//     },
//     initial: 'selected',
//     states: {
//         selected: {
//             initial: 'idle',

//             states: {
//                 idle: {
//                   always: {
//                       target: 'loading'
//                   }  
//                 },
//                 loading: {
//                     // see invoke vs entry & action vs service
                    // invoke: assign((context, event) => {
                    //     console.log("fdfdfgf")
                    //     let genre= {}
                    //     if (event || !event.name) {
                    //         console.log(event, '!!!!!!!!!!!! event !!!!!!')
                            
                    //         if(context.genres['all']) {
                    //             console.log(contex.genres, "from if")
                    //             return {
                    //                 ...context,
                    //                 genre: context.genres['all']
                    //             }
                    //         }
                    //         else {
                    //             console.log(createGenreMachine)
                    //             genre = spawn(createGenreMachine('all'))
                    //             console.log(genre, "from spawn")
                    //             return {
                    //                 genres: {
                    //                     ...context.genres,
                    //                     ['all']: genre
                    //                 },
                    //                 genre
                    //             }
                    //         }
                    //     }
                    //     genre = context.genres[event.name] 
                    //     if (genre) {
                    //         return {
                    //             ...context,
                    //             genre
                    //         }
                    //     }
                    //     else {
                    //         console.log(event)
                    //         genre = spawn(createGenreMachine(event.name))
                    //         return {
                    //             genres: {
                    //                 ...context.genres,
                    //                 [event.name]: genre
                    //             },
                    //             genre: genre
                    //         }
                    //     }
                    // })
//                 },
//                 loaded: {},
//                 failed: {}
//             }
//         }
//     }
// })

// export default appMachine

import {Machine, assign, spawn} from 'xstate'
import movies from '../public/movies'
import createGenreMachine from './createGenreMachine'


const appMachine = Machine({
    id: 'app',
    context: {
        genre: 'all',
        genres: {}
    },
    initial: 'selected',
    states: {
        selected: {
            initial: 'idle',

            states: {
                idle: {
                  always: {
                      target: 'loading'
                  }  
                },
                loading: {
                    entry: assign((context, event) => {
                        console.log("fdfdfgf")
                        let genre= {}
                        if (event || !event.name) {
                            console.log(event, '!!!!!!!!!!!! event !!!!!!')
                            
                            if(context.genres['all']) {
                                console.log(contex.genres, "from if")
                                return {
                                    ...context,
                                    genre: context.genres['all']
                                }
                            }
                            else {
                                console.log(createGenreMachine)
                                genre = spawn(createGenreMachine('all'))
                                console.log(genre, "from spawn")
                                return {
                                    genres: {
                                        ...context.genres,
                                        ['all']: genre
                                    },
                                    genre
                                }
                            }
                        }
                        genre = context.genres[event.name] 
                        if (genre) {
                            return {
                                ...context,
                                genre
                            }
                        }
                        else {
                            console.log(event)
                            genre = spawn(createGenreMachine(event.name))
                            return {
                                genres: {
                                    ...context.genres,
                                    [event.name]: genre
                                },
                                genre: genre
                            }
                        }
                    })
                    // see invoke vs entry & action vs service
                
                },
                loaded: {},
                failed: {}
            }
        }
    }
})

export default appMachine