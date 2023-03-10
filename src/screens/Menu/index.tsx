import { Box, Button, Container, Divider, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { Plus } from "phosphor-react"
import { PizzaCard } from "../../components/PizzaCard"
import { pizzas } from "../../data/pizzas"

export const MenuScreen = () => {
    const router = useRouter()

    return (
        <Container my={["24px", "40px"]} p={["20px", "10px"]}>
            <Heading color="gray.800" mb="8px">Carpádio</Heading>
            <Divider mb="24px" w="35%" />
            <Flex
                boxShadow={"0px 10px 40px -3px rgba(0,0,0,0.1)"}
                p={["24px", "48px"]}
                borderRadius="12px"
                gap={["24px", "72px"]}
                flexWrap={["wrap-reverse"]}
            >
                <Stack
                    justifyContent="space-around"
                    w={["100%", "60%"]}
                    gap={["16px", "0"]}
                >
                    <Heading fontSize={["2xl", "3xl"]}> Pizza de Portuguesa</Heading>
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
                <Box maxW={["100%", "40%"]} minW={["100%", "40%"]}
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
        </Container>
    )
}