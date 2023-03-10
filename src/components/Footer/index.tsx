import { Box, Container, Divider, Flex, Link, Text } from "@chakra-ui/react"
import { Phone, At } from "phosphor-react"

export const Footer = () => {
    return (
        <Container as="footer" height="120px">
            <Divider />

            <Flex gap="24px" justifyContent="center" my="24px">
                <Flex as={Link} href={"https://wa.me/1334725579"} isExternal alignItems="center">
                    <Phone size={20} />
                    <Text align="center" fontWeight="bold"> (13) 3472-5579</Text>
                </Flex>
                <Flex as={Link} href={"to:falecom@pizza10.com.br"} isExternal alignItems="center" gap="5px">
                    <At size={20} />
                    <Text align="center" fontWeight="bold"> falecom@pizza10.com.br</Text>
                </Flex>
            </Flex>
            <Text align="center"> 2023 | Todos os direitos reservados</Text>

        </Container>
    )
}