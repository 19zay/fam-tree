import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

const parents = () => {
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
                Parents
            </MenuButton>
            
            <MenuList>
                <MenuItem>Adebayo</MenuItem>
                <MenuItem>Esther</MenuItem>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default parents