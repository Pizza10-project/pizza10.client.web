import { Box, Button, Container, Flex, Heading, Text, Image, Highlight } from '@chakra-ui/react'

import { Header } from '../../components/HeaderDescription'
import { NavBar } from '../../components/Nav'
import { BannerSection } from './components/banner'

export const HomeScreen = () => {
    return (
        <Container p="20px">
            <Header description='Peça rápido, aprecie lentamente.' title="Pizza 10 - Rápida e deliciosa" />
            <NavBar />
            <BannerSection />

        </Container >
    )
}