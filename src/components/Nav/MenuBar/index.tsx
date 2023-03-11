import { Button, Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Logo from "../../../assets/icon/logo.icon";


export const MenuBar = () => {
  const router = useRouter()

  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      px="180px"
      py="20px"
      marginTop={["24px", "0"]}
      display={["none", "flex"]}
      as="nav"
    >
      <Button variant="link" onClick={() => router.push("/")}>
        <Logo width={50} height={50} />
      </Button>
      <Flex justifyContent="flex-end" alignItems="center">

        <Button
          variant="solid"
          backgroundColor="primary.700"
          _hover={{ backgroundColor: "primary.500" }}
          mr="50px"
          letterSpacing={"widest"}
          color="white"
          p="24px 32px"
          borderRadius={"30px"}
          onClick={() => router.push("/menu")}
        >
          Peça online
        </Button>
      </Flex>
    </Flex>
  );
}
