import { Box, Switch, useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import FamDiv from "../modules/famDiv"


export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box >

      {/* Toggle DarkMode */}
      <Button 
        float="right"
        mt="2rem"
        mr="2rem"
        onClick={toggleColorMode}
        >
        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
      </Button>

      {/* Main Div */}
      <FamDiv/>

    </Box>
  )
}
