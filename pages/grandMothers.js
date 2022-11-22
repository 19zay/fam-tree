import { Box } from "@chakra-ui/react";
import Navbar from "../modules/navbar"
import GrandMoms from "../modules/grandMoms"

const grandMothers = () => {
  return (
    <Box>
        <Navbar/>
        <GrandMoms/>
    </Box>
  )
}

export default grandMothers