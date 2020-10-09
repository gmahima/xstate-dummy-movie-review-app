import {useMachine} from '@xstate/react'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import appMachine from "../machines/appMachine"
const Container = styled.div`
${tw `
 bg-gray-100 min-h-screen flex flex-col
 text-gray-900 text-xl

`}
`
const Header = styled.div`
${tw `font-semibold text-center`}
`
const Content = styled.div `
${tw `p-16`}
`
const MainContent = styled.div `
${tw `p-2 bg-gray-200`}
`
export default function Home() {
  const [current, send] = useMachine(appMachine)
  const {movies, genre} = current.context 
  return (
    <Container>
      <Content>
        <Header>
            Movies
        </Header>
        <MainContent>
          <h1>{genre}</h1>
          {
            movies? <img src={movies[0].img} /> : 'loading'
          }
        </MainContent>
      </Content>
      
    </Container>
  )
}
