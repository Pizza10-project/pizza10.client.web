import { Box, Flex, Heading, Highlight, Img, Text } from "@chakra-ui/react"

export const DescriptionSection = () => {
    return (
        <Flex
            height={["400px", "500px"]}
            alignItems="center"
            justifyContent="space-between"
            gap="48px"
            my={["24px", "48px"]}
            backgroundColor="gray.50"
            boxShadow={["2px -2px 24px 0px rgba(0,0,0,0.1)", "0px 10px 15px 10px rgba(0,0,0,0.1)"]}
            padding={["40px", "60px"]}
            borderRadius="24px"
        >
            <Box w={["100%", "50%"]}>
                <Text fontSize={["lg", "3xl"]} letterSpacing="widest">Do tamanho da sua fome!</Text>
                <Heading fontSize={["4xl", "6xl"]} letterSpacing="wide" py="20px">
                    <Highlight
                        query="25cm ou 35cm"
                        styles={{ color: 'primary.950', letterSpacing: "widest" }}>
                        Nossas pizzas tem 25cm ou 35cm de diâmetro
                    </Highlight>
                </Heading>
                <Text
                    fontSize={["lg", "3xl"]}
                    letterSpacing="widest"

                ><Highlight
                    query="Você decide!"
                    styles={{ color: 'primary.950', fontWeight: "bold", letterSpacing: "widest" }}>
                        Com ou sem bordas recheadas? Você decide!
                    </Highlight>
                </Text>
            </Box>
            <Box display={["none", "flex"]} w="40%" borderRadius="24px" boxShadow={"0px 10px 15px 10px rgba(0,0,0,0.1)"}>
                <Img borderRadius="24px" backgroundSize={"cover"} src="https://i.ibb.co/yd44N4t/CARNE-SECA-COM-CATUPIRY.jpg" alt="" />
            </Box>

        </Flex>
    )
}