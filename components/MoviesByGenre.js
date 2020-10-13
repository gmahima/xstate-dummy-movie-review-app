import {useActor} from '@xstate/react'
import movies from '../public/movies'
//check service vs actor
const MoviesByGenre = ({actor}) => {
    // console.log("hi!!!!!!")
    // console.log(service)
    const [current, send] = useActor(actor)
    console.log(current.context)
    return (
        <div>
            {movies.map(m => <h4>{m.name}</h4>)}
        </div>
    )
}

export default MoviesByGenre