import { Box } from "@chakra-ui/react";
import  FamDiv  from '../modules/famDiv'
import Navbar from "../modules/navbar"
import GpDiv from "../modules/grandparents";


export default function Home() {


  return (
    <Box >
      <Navbar/>
      {/* <FamDiv/> */}
      <GpDiv/>
    </Box>
  )
}
