import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { Header } from "../../../components/HeaderDescription"
import { PizzaCard } from "../../../components/PizzaCard"
import { pizzas } from "../../../data/pizzas"
import { formatMoney } from "../../../utils/formatMoney"

export const GeneralMenuScreen = () => {
    return (
        <Container>
            <Header description='Veja todo o carpádio aqui' title="Pizza 10 | Carpádio" />
            <Heading> Carpádio </Heading>
            <Text fontSize="2xl"> Veja todo o carpádio aqui</Text>
            <Flex gap="32px" flexWrap="wrap" my="40px" alignItems="center">
                {pizzas.map((pizza) => (
                    <PizzaCard
                        key={pizza.id}
                        id={pizza.id}
                        name={pizza.name}
                        description={pizza.description}
                        imageSrc={pizza.imageSrc}
                        price={formatMoney(pizza.price)}
                    />
                ))}
            </Flex>
        </Container>
    )
}