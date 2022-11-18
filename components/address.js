import { Box, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'

const address = () => {
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
            <MenuButton color="white">
                Address
            </MenuButton>
            
            <MenuList>
                <MenuItem>6, Omololu by Ayilara street, Surulere, Lagos.</MenuItem>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default address