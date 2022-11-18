import { Box, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, Heading, HStack, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Parents from "../components/parents"
import Children from '../components/children'
import Address from '../components/address'
import Numbers from '../components/numbers'
import DateOfBirth from '../components/DOB'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const famDiv = () => {
  return (
    <Container 
      maxW="container.xl" 
      centerContent

    >
        <Flex
          py={[0, 10, 20]} 
        >
            <Card 
                w={[350, 450, 550]}
                h={[500, 500, 630]}
                bg="#B9E2F4"
                borderRadius="1rem"
                mt="0.9rem"
            >
                <CardBody>
                    <Image 
                        src='https://static.vecteezy.com/system/resources/previews/003/538/263/non_2x/illustration-graphic-of-international-day-of-families-free-vector.jpg'
                        objectFit="cover"
                        borderRadius="1rem"
                    />

                    <CardHeader 
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Heading
                            color="#006093"
                            mt="1rem"
                            size='lg'
                        >
                            Oyeniyi Household
                        </Heading>
                    </CardHeader>

                    <HStack
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mt="0.4rem"
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

                <Divider/>

                <CardFooter
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Stack mr="0.5rem">
                    <BsTwitter fontSize="1.5rem" color='#267A62'/>
                    </Stack>

                    <Stack>
                        <BsInstagram fontSize="1.5rem" color='#267A62'/>
                    </Stack>

                </CardFooter>
            </Card>
        </Flex>
    </Container>
  )
}

export default famDiv