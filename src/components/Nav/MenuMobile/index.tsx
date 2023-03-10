import { Button, Container, Flex, Link } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Logo from "../../../assets/icon/logo.icon"

export const MenuMobile = () => {
    const router = useRouter()

    return (
        <Container
            width="100%"
            px={["24px", "10px"]}
            display={["flex", "none"]}
            as="nav"
        >
            <Flex w="100%" py={["16px", "24px"]} justifyContent="space-between"
                alignItems="center">
                <Button variant="link" onClick={() => router.push("/")}>
                    <Logo height={50} width={50} />
                </Button>
                <Button
                    variant="solid"
                    colorScheme="primary"
                    borderRadius="24px"
                    size="lg"
                    px="48px"
                    color="primary.950"
                    onClick={() => router.push("/menu")}
                >Peça Já
                </Button>
            </Flex>
        </Container>
    )
}