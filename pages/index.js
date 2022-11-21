import { Box, useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import  FamDiv  from '../modules/famDiv'
import Navbar from "../modules/navbar"


export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box >

      <Navbar/>
    
      <FamDiv/>

    </Box>
  )
}
