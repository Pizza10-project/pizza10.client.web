import { Container } from "@chakra-ui/react"
import { MenuBar } from "./MenuBar"

export const NavBar = () => {
    return (
        <Container minWidth="100%" p={0}>
            <MenuBar />
        </Container>
    )
}