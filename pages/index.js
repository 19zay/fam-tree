import { Box, Switch, useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"


export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box 
      float="right"
      mt="2rem"
      mr="2rem"
    >

      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
      </Button>

    </Box>
  )
}
