import { Box, Button, Flex, Img, Link, LinkBox, LinkOverlay, Text, useToast } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { ShoppingCart } from "phosphor-react"

interface PizzaCardInterface {
    imageSrc: string
    name: string
    description: string
    price: string
    id: number | string
}


export const PizzaCard = ({ description, imageSrc, name, price, id }: PizzaCardInterface) => {
    const toast = useToast()
    const router = useRouter()

    const addToCart = (name: string) => {
        try {
            toast({
                title: "Pizza adicionada",
                description: `Pizza ${name} foi adicionado ao seu carrinho`,
                position: "top-right",
                status: "success",
                isClosable: true,
                duration: 5000
            })
        }
        catch (e) {
            toast({
                title: "Tente novamente mais tarde",
                description: `Houve um problema ao tentar adicionar ${name} ao seu carrinho`,
                position: "top-right",
                status: "error",
                isClosable: true,
                duration: 5000
            })
        }
    }

    return (
        <LinkBox
            minW="240px"
            maxW="240px"
            border='1px solid'
            borderColor="gray.100"
            borderRadius='24px'
            overflow='hidden'
        >
            <LinkOverlay href={`/menu/${id}`}>
                <Img
                    w="fit-content"
                    src={imageSrc}
                    alt={imageSrc || description}
                />
                <Box p='12px 16px'>
                    <Text fontWeight={"extrabold"} noOfLines={2} size="lg">{name}</Text>
                    <Text fontWeight="bold" noOfLines={2} color="gray.400"> {description}</Text>
                    <Text letterSpacing={"wide"} color="gray.700">R$ {price}</Text>
                </Box>
            </LinkOverlay>
            <Flex gap="12px" p='0 16px 16px' w="100%">
                <Button borderRadius="12px"
                    variant="solid"
                    size="md"
                    colorScheme="primary"
                    color="white"
                    onClick={() => addToCart(name)}
                >
                    <ShoppingCart weight="fill" color="white" size={20} />
                </Button>
                <Button size="md" borderRadius="12px" variant="outline" colorScheme="yellow" onClick={() => router.push(`/menu/${id}`)}> Mais detalhes</Button>
            </Flex>
        </LinkBox>
    )
}