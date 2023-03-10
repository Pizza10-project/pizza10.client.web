import { Container } from "@chakra-ui/react"
import { MenuBar } from "./MenuBar"
import { MenuMobile } from "./MenuMobile"

export const NavBar = () => {
    return (
        <Container minWidth="100%" p={0}>
            <MenuBar />
            <MenuMobile />
        </Container>
    )
}