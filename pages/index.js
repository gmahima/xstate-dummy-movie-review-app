import Head from 'next/head'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
${tw `
 bg-gray-100 min-h-screen flex flex-col
 text-gray-900 text-xl

`}
`
const Header = styled.div`
${tw `border font-semibold text-center`}
`
const Content = styled.div `
${tw `p-16`}
`
export default function Home() {
  return (
    <Container>
      <Content>
        <Header>
            Movies
        </Header>
      </Content>
      
    </Container>
  )
}
