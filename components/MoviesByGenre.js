import {useService} from '@xstate/react'
import movies from '../public/movies'
import styled from 'styled-components'
import tw from 'twin.macro'
import {genres} from '../public/movies'
//check service vs actor

const MoviesContainer = styled.div `
${tw `grid sm:grid-cols-3 gap-6 p-6 bg-black rounded h-80 overflow-y-auto overscroll-none`}
`
const Movie = styled.div `
${tw `bg-gray-800 p-2 rounded flex flex-col items-center justify-center`}
`

const MoviesByGenre = ({service, handleChange}) => {
    // console.log("hi!!!!!!")
    // console.log(service)
    const [current, send] = useService(service)
    return (
        <div>
            <div css={tw `text-gray-200 uppercase tracking-wide`}>
                <span>choose a genre</span> 
                <select css={tw`p-2 my-6 text-gray-400 bg-gray-800 mx-6`} value={current.context.genre} onChange = {(e) => {handleChange(e.target.value)} } >
                    {genres.map(genre => {
                        return <option key={genre}>{genre}</option>;
                    })}
                </select>
            </div>
            <MoviesContainer>
                {current.context.movies.map(m => <Movie>{m.name}</Movie>)}
            </MoviesContainer>
        </div>
        
    )
}

export default MoviesByGenre