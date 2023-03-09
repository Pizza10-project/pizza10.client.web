import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CaretDown, UserCircle } from "phosphor-react";
import { appRoutes } from "../../../utils/app-routes";

export const DropDownMenu = () => {
  const router = useRouter();

  return (
    <Flex mr="8px">
      <Menu>
        <MenuButton>
          <Flex alignItems="center">
            <CaretDown />
            <Box
              minWidth="50px"
              maxWidth="50px"
              maxHeight="50px"
              minHeight="50px"
              border="2px"
              as={Flex}
              justifyContent="center"
              alignItems="center"
              ml="8px"
              borderColor="secondary.500"
              borderRadius="20%"
            >
              <UserCircle size={50} />
            </Box>
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem color="black" onClick={() => router.push("/")}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
