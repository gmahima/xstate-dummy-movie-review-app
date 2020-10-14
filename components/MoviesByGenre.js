import {useService} from '@xstate/react'
import movies from '../public/movies'
import styled from 'styled-components'
import tw from 'twin.macro'
//check service vs actor

const Container = styled.div `
${tw `grid sm:grid-cols-3 gap-6 p-6 bg-black rounded h-80 overflow-y-auto overscroll-none`}
`
const Movie = styled.div `
${tw `bg-gray-800 p-2 h-20 rounded`}
`
const MoviesByGenre = ({service}) => {
    // console.log("hi!!!!!!")
    // console.log(service)
    const [current, send] = useService(service)
    console.log(current)
    return (
        <Container>
            {current.context.movies.map(m => <Movie>{m.name}</Movie>)}
        </Container>
    )
}

export default MoviesByGenre