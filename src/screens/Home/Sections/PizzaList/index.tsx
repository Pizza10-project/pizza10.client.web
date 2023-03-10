import { Box, Button, Flex, Heading, } from "@chakra-ui/react"
import { PizzaCard } from "../../../../components/PizzaCard"
import { Plus } from "phosphor-react"
import { useRouter } from "next/router"
import { pizzas } from "../../../../data/pizzas"

export const PizzaListSection = () => {
    const router = useRouter()

    return (
        <Box my="40px">
            <Heading color="gray.600">Conheça algumas de nossas pizzas</Heading>
            <Flex gap="32px" overflowX="auto" my="40px" alignItems="center">
                {pizzas.map((pizza) => (
                    <PizzaCard
                        key={pizza.id}
                        id={pizza.id}
                        name={pizza.name}
                        description={pizza.description}
                        imageSrc={pizza.imageSrc}
                        price={pizza.price}
                    />
                ))}
                <Button
                    variant="link"
                    ml="18px"
                    leftIcon={<Plus />}
                    onClick={() => router.push("/menu")}
                >Ver mais</Button>
            </Flex>
        </Box>
    )
}