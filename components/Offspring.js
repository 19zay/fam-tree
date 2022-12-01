import React from 'react'
import { Box, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

const Offspring = () => {
    const divColor = useColorModeValue("#51b8e5" , "#3882A3")
    const textColr = useColorModeValue("#3f3f3f" , "white")
  return (
    <Box
        w={["6rem", "8rem", "8rem" ]}
        h={["2rem", "3rem", "3rem"]}
        borderRadius="0.7rem"
        bg={divColor}
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <Menu>
            <MenuButton 
                color={textColr} 
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

export default Offspring