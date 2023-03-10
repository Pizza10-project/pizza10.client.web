import { Button, Flex, Link } from "@chakra-ui/react";
import Logo from "../../../icon/Logo";

import { DropDownMenu } from "./dropdownMenu";

export const MenuBar = () => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"

      py="20px"
      marginTop={["24px", "0"]}
      display={["none", "flex"]}
      as="nav"
    >
      <Link href={"/"}>
        <Logo width={50} height={50} />
      </Link>
      <Flex justifyContent="flex-end" alignItems="center">

        <Button
          variant="link"
          colorScheme="white"
          mr="50px"
          as={Link}
          href={"/"}
        >
          Carpádio
        </Button>
        <Button
          variant="solid"
          backgroundColor="primary.700"
          _hover={{ backgroundColor: "primary.500" }}
          mr="50px"
          color="white"
          p="24px 32px"
          borderRadius={"30px"}
          as={Link}
          href={"/"}
        >
          Peça online
        </Button>
      </Flex>
    </Flex>
  );
}
