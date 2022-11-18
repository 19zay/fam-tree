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
        mt="1rem"
        mr="1rem"
        onClick={toggleColorMode}
        >
        {colorMode === 'light' ? <SunIcon/> : <MoonIcon/> }
      </Button>

      {/* Main Div */}
      <FamDiv/>

    </Box>
  )
}
