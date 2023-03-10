import { Box, Img, Text } from "@chakra-ui/react"

interface PizzaCardInterface {
    imageSrc: string
    name: string
    description: string
    price: string
}


export const PizzaCard = ({ description, imageSrc, name, price }: PizzaCardInterface) => {
    return (
        <Box
            minW="240px"
            maxW="240px"
            borderWidth='1px'
            borderRadius='24px'
            overflow='hidden'

        >
            <Img
                w="240px"
                src={imageSrc}
                alt={imageSrc || description}
            />
            <Box p='24px'>
                <Text fontWeight={"extrabold"} noOfLines={1} size="lg">{name}</Text>
                <Text fontWeight="bold" noOfLines={1} color="gray.500"> {description}</Text>
                <Text letterSpacing={"wide"}>R$ {price}</Text>
            </Box>
        </Box>
    )
}