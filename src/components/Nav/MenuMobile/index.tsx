import { Button, Container, Flex } from "@chakra-ui/react"
import Logo from "../../../assets/icon/Logo"

export const MenuMobile = () => {
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
                >Peça Já
                </Button>
            </Flex>
        </Container>
    )
}