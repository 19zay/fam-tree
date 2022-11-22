import { Box, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, Heading, HStack, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Parent from '../components/Parent'
import Offspring from '../components/Offspring'
import Address from '../components/Addresss'
import Numbers from '../components/Contact'
import DateOfBirth from '../components/DOB'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { useColorModeValue } from '@chakra-ui/react'

const famDiv = () => {
    const headerColor = useColorModeValue("#035E95" , "white") 
    const textColr = useColorModeValue("#595959" , "white")

  return (
    <Container 
      maxW="container.xl" 
      centerContent

    >
        <Flex
          py={[0, 7, 7]} 
        >
            <Card 
                w={[350, 450, 550]}
                h={[500, 600, 630]}
                // bg="#B9E2F4"
                borderRadius="1rem"
                mt="0.9rem"
                boxShadow= "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
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
                            color={headerColor}
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
                        <Parent/>
                        <Offspring/>

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
                    <BsTwitter fontSize="1.5rem" color={textColr}/>
                    </Stack>

                    <Stack>
                        <BsInstagram fontSize="1.5rem" color={textColr}/>
                    </Stack>

                </CardFooter>
            </Card>
        </Flex>
    </Container>
  )
}

export default famDiv