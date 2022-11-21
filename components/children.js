import React from 'react'
import { Box, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

const Children = () => {
    const divColor = useColorModeValue("#51b8e5" , "#3882A3")
  return (
    <Box
        w="7rem"
        h="2.6rem"
        bg={divColor}
        borderRadius="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <Menu>
            <MenuButton 
                // color="white" 
                fontSize="0.8rem" 
                fontWeight="600"
            >
                Children
            </MenuButton>
            
            <MenuList>
                <MenuItem>Seyi</MenuItem>
                <MenuItem>Bisi</MenuItem>
                <MenuItem>Gbenga</MenuItem>
                <MenuItem>Damilola</MenuItem>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default Children