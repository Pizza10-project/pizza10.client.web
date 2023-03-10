import { Button, Container, Flex, Link } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Logo from "../../../assets/icon/logo.icon"

export const MenuMobile = () => {
    const router = useRouter()

    return (
        <Container
            width="100%"
            px={"10px"}
            display={["flex", "none"]}
            as="nav"
        >
            <Flex w="100%" py="24px" justifyContent="space-between"
                alignItems="center">
                <Logo height={50} width={50} />
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