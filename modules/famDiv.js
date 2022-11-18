import { Box, Card, CardBody, Container, Heading, HStack, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Parents from "../components/parents"
import Children from '../components/children'
import Address from '../components/address'
import Numbers from '../components/numbers'
import DateOfBirth from '../components/DOB'

const famDiv = () => {
  return (
    <Container 
      maxW="container.xl" 
      centerContent
    >
        <Card 
            w="25rem"
            h="34rem"
            bg="#B9E2F4"
            mt="6rem"
            borderRadius="1rem"
        >
            <CardBody>
                <Image 
                    src='https://static.vecteezy.com/system/resources/previews/003/538/263/non_2x/illustration-graphic-of-international-day-of-families-free-vector.jpg'
                    objectFit="cover"
                    borderRadius="1rem"
                />

                <Stack 
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading
                        color="#006093"
                        mt="2rem"
                    >
                        Oyeniyi Household
                    </Heading>
                </Stack>

                <HStack
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt="1rem"
                >
                    <Parents/>
                    <Children/>

                </HStack>

                <HStack
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt="1rem"
                >
                    <Address/>
                    <Numbers/>
                    <DateOfBirth/>
                
                </HStack>

            </CardBody>
        </Card>
    </Container>
  )
}

export default famDiv