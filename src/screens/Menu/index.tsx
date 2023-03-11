import { Box, Button, Container, Divider, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { Plus } from "phosphor-react"
import { Header } from "../../components/HeaderDescription"
import { PizzaCard } from "../../components/PizzaCard"
import { pizzas } from "../../data/pizzas"
import { formatMoney } from "../../utils/formatMoney"

export const MenuScreen = () => {

    const router = useRouter()

    return (
        <Container my={["24px", "16px"]} p={["20px", "24px"]}>
            <Header description='Carpádio' title="Pizza 10 | Carpádio" />
            <Heading fontSize="5xl" color="gray.700" mb="8px">Carpádio</Heading>
            <Divider mb="24px" w="20%" />
            <Flex
                boxShadow={"0px 10px 40px -3px rgba(0,0,0,0.1)"}
                p={["24px", "48px"]}
                borderRadius="12px"
                gap={["24px", "96px"]}
                flexWrap={["wrap-reverse", "nowrap"]}
            >
                <Stack
                    justifyContent="space-around"
                    w={["100%", "40%"]}
                    gap={["16px", "30px"]}
                >
                    <Heading fontSize={["2xl", "5xl"]}> Pizza de Portuguesa</Heading>
                    <Text fontSize={["lg", "2xl"]}>Pizza feito com Molho de tomate, presunto, mozzarella, ovos, cebolla e azeitonas</Text>
                    <Text letterSpacing={"widest"} fontSize="2xl">R$ 19.90</Text>
                    <Flex gap="24px" w="100%">
                        <Button
                            variant="solid"
                            size="lg"
                            w='100%'
                            borderRadius="24px"
                            colorScheme="primary"
                            color="white"
                        >
                            Comprar
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            w='100%'
                            borderRadius="24px"
                            colorScheme="primary"
                            color="primary.700"
                            border="2px solid"
                            borderColor="primary.500"
                        >Voltar
                        </Button>
                    </Flex>

                </Stack>
                <Box maxW={["100%", "50%"]} minW={["100%", "50%"]}
                    borderRadius="24px"
                    overflow="hidden"
                    boxShadow={"0px 10px 40px -3px rgba(0,0,0,0.1)"}
                >
                    <Img src="https://i.ibb.co/k91TsT3/PORTUGUESA.jpg" alt="" />
                </Box>
            </Flex>

            <Box my="40px">
                <Heading color="gray.600">Conheça nossas outras pizzas</Heading>
                <Flex gap="32px" overflowX="auto" my="40px" alignItems="center">
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
                    <Button
                        variant="link"
                        ml="18px"
                        leftIcon={<Plus />}
                        onClick={() => router.push("/menu")}
                    >Ver mais</Button>
                </Flex>
            </Box>
        </Container>
    )
}