import { Box, Button, Container, Flex, Heading, Text, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Header } from '../components/HeaderDescription'
import { NavBar } from '../components/Nav'

const Home: NextPage = () => {
  return (
    <Container>
      <Header description='Peça rápido, aprecie lentamente.' title="Pizza 10 - Rápida e deliciosa" />
      <NavBar />
      <Flex backgroundColor={"primary.950"}
        alignItems='center'
        justifyContent="center"
        gap="80px"
        h="500px"
        borderRadius="24px">
        <Box w="40%"
        >
          <Image src="/entregador.png" alt="" />
        </Box>
        <Box w="60%" letterSpacing={'wide'} p="30px">
          <Flex
            backgroundColor="primary.100"
            justifyContent="center"
            color="primary.900"
            w="100%"
            p="12px"
            borderRadius="12px"
          > ELEITO O MELHOR FASTFOOD DELIVERY  DE SÃO PAULO! </Flex>
          <Box>
            <Heading fontSize="6xl" color="white">Peça rápido, aprecie </Heading>
            <Heading fontSize="6xl" color="primary.500"> lentamente.</Heading>
          </Box>
          <Text
            fontSize="18px"
            my="18px"
            color="white"
          >Pizzas com massa feita na hora, <br /> assada na pedra no forno a lenha!</Text>

          <Button
            variant="outline"
            size="lg"
            borderRadius="24px"
            px="40px"
            border="1px solid"
            borderColor="primary.500"
            color="primary.800"
            _hover={{ backgroundColor: "primary.600", color: "primary.900" }}
            backgroundColor="primary.500"

          >Pedir Agora</Button>
        </Box>

      </Flex>
    </Container >
  )
}

export default Home
