import {
    Container
} from '@chakra-ui/react'


import { Header } from '../../components/HeaderDescription'
import { NavBar } from '../../components/Nav'
import { BannerSection } from './Sections/Banner'
import { DescriptionSection } from './Sections/Description'
import { PizzaListSection } from './Sections/PizzaList'

export const HomeScreen = () => {
    return (
        <Container p="20px">
            <Header description='Peça rápido, aprecie lentamente.' title="Pizza 10 - Rápida e deliciosa" />
            <NavBar />
            <BannerSection />
            <PizzaListSection />
            <DescriptionSection />

        </Container >
    )
}