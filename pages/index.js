import {useMachine} from '@xstate/react'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import appMachine from "../machines/appMachine"
import MoviesByGenre from '../components/MoviesByGenre'
const Container = styled.div`
${tw `
 bg-gray-900 min-h-screen flex flex-col
 text-gray-500 text-xl

`}
`
const Header = styled.div`
${tw `font-semibold text-center`}
`
const Content = styled.div `
${tw `p-16`}
`
const MainContent = styled.div `
${tw `p-2 bg-gray-800`}
`
export default function Home() {
  const [current, send] = useMachine(appMachine)
  const {genres, genre} = current.context 
  return (
    <Container>
      <Content>
        <Header>
            Movies
        </Header>
        <MainContent>
          <div>
            {
              genre ? <MoviesByGenre actor={genre} key={genre.id}/> : null
            }
          </div>
        </MainContent>
      </Content>
      
    </Container>
  )
}
