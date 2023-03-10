import { Box, Button, Container, Flex, Highlight, Img, Stack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"

export const NotFoundScreen = () => {
    const router = useRouter()

    return (
        <Container>
            <Flex px="40px" w="100%" alignItems="center">
                <Img src="/frustado.png" alt="" />


                <Stack align="flex-start" gap="32px" >
                    <Text fontSize="5xl">
                        <Highlight query="não existe"
                            styles={{ color: 'primary.950', fontWeight: "bold", letterSpacing: "tight" }}>

                            A página que você procura não existe.
                        </Highlight>

                    </Text>
                    <Button
                        variant="solid"
                        w="80%"
                        size="lg"
                        borderRadius="24px"
                        p="28px"
                        colorScheme={"primary"}
                        onClick={() => router.push("/")}
                        fontSize="lg"
                    >
                        Voltar
                    </Button>
                </Stack>

            </Flex>

        </Container >
    )
}