import React from 'react'
import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

const numbers = () => {
  return (
    <Box
        w="7rem"
        h="2.6rem"
        bg="#395B64"
        borderRadius="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <Menu>
            <MenuButton color="white" fontSize="0.8rem" fontWeight="600">
                Numbers
            </MenuButton>
            
            <MenuList>
                <MenuItem>Adebayo: 0123456789</MenuItem>
                <MenuItem>Esther: 012345678</MenuItem>
                <MenuItem>-</MenuItem>
                <MenuItem>Seyi: 0123456789</MenuItem>
                <MenuItem>Bisi: 0123456789</MenuItem>
                <MenuItem>Gbenga: 0123456789</MenuItem>
                <MenuItem>Damilola: 0123456789</MenuItem>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default numbers