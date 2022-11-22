import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from "../modules/navbar"
import GpBio from '../modules/gpBio'

const bioPage = () => {
  return (
    <Box>
        <Navbar/>
        <GpBio/>
    </Box>
  )
}

export default bioPage