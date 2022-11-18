import { Box, Card, CardBody, Container, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'

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
                    >
                        Oyeniyi Household
                    </Heading>
                </Stack>

                <Stack>
                    
                </Stack>

            </CardBody>
        </Card>
    </Container>
  )
}

export default famDiv