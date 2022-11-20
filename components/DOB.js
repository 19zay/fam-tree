import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

const DOB = () => {
  return (
    <Box
        w="7rem"
        h="2.6rem"
        bg="#3882a3"
        borderRadius="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <Menu>
            <MenuButton color="white" fontSize="0.8rem" fontWeight="600">
                Date of Births
            </MenuButton>
            
            <MenuList>
                <MenuItem>Adebayo: 28th July 19XX</MenuItem>
                <MenuItem>Esther: 27th August 19XX</MenuItem>
                <MenuItem>-</MenuItem>
                <MenuItem>Seyi: 26th April 19XX</MenuItem>
                <MenuItem>Bisi: 6th September 19XX</MenuItem>
                <MenuItem>Gbenga: 20th May !9XX</MenuItem>
                <MenuItem>Damilola: 30th March 2003</MenuItem>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default DOB