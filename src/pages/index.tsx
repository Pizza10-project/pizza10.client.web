import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/HeaderDescription'

const Home: NextPage = () => {
  return (
    <Container>
      <Header description='Peça rápido, aprecie lentamente.' title="Pizza 10 - Rápida e deliciosa" />
      <h1> Hello World - Pizza 10</h1>
    </Container>
  )
}

export default Home
