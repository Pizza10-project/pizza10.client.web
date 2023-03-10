import { Box, Button, Flex, Heading, Text, Image, Highlight } from '@chakra-ui/react'

export const BannerSection = () => {
    return (
        <Flex backgroundColor="primary.950"
            alignItems={["baseline", 'center']}
            border="2px solid"
            borderColor="primary.800"
            boxShadow='2px -2px 24px 0px rgba(214,52,71,0.75);'
            h={["480px", "460px"]}
            gap="80px"
            borderRadius="24px">
            <Box w="40%" display={["none", "flex"]}>
                <Image src="/entregador.png" backgroundSize='cover' alt="" />
            </Box>
            <Box w={["100%", "60%"]} letterSpacing={['widest', "wide"]} p={["24px", "32px"]}>
                <Flex
                    backgroundColor="primary.100"
                    justifyContent="center"
                    color="primary.900"
                    display={["none", "flex"]}
                    p="12px"
                    borderRadius="12px"
                > ELEITO O MELHOR DELIVERY  DE SÃO PAULO! </Flex>

                <Heading fontSize="5xl" color="white" my="24px">
                    <Highlight
                        query="lentamente"
                        styles={{ color: 'primary.500' }}>
                        Peça rápido, aprecie lentamente
                    </Highlight>
                </Heading>

                <Text
                    fontSize="18px"
                    my="18px"
                    color="white"
                >Pizzas com massa feita na hora, assada na pedra no forno a lenha!</Text>

                <Button
                    variant="solid"
                    size="lg"
                    borderRadius="24px"
                    my="12px"
                    px={["95px", "40px"]}
                    color="primary.900"
                    _hover={{ backgroundColor: "primary.600", color: "primary.900" }}
                    backgroundColor="primary.500"

                >Pedir Agora</Button>
            </Box>
        </Flex>
    )
}