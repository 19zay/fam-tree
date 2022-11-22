import { Box } from "@chakra-ui/react";
import  FamDiv  from '../modules/famDiv'
import Navbar from "../modules/navbar"
import LandingPage from "../modules/grandparents";


export default function Home() {


  return (
    <Box >
      <Navbar/>
      {/* <FamDiv/> */}
      <LandingPage/>
    </Box>
  )
}
