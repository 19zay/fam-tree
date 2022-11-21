import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Heading } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { GiFamilyHouse } from "react-icons/gi"

const navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Flex p={[1, 2, 3]}>
         <GiFamilyHouse fontSize="1.4rem" color="#4ac1f5"/>
         <Text ml="0.3rem"  fontSize="1.3rem" fontWeight="600">famTree</Text>
      </Flex>

      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};



const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

// const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
//   return (
//     <Link href={to}>
//       <Text display="block" {...rest}>
//         {children}
//       </Text>
//     </Link>
//   );
// };

const MenuLinks = ({ isOpen }) => {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      
    >
      <Stack
        spacing={8}
        align="flex-start"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        // pt={[4, 4, 0, 0]}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        {/* <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How It works </MenuItem>
        <MenuItem to="/faetures">Features </MenuItem>
        <MenuItem to="/pricing">Pricing </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
          >
            Create Account
          </Button>
        </MenuItem> */}
            <Button 
                mt="1rem"
                mr="1rem"
                onClick={toggleColorMode}
                >
                {colorMode === 'light' ? <SunIcon/> : <MoonIcon/> }
            </Button>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default navbar;
