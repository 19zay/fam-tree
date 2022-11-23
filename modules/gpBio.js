import React from 'react'
import { Container, Flex, Card, CardBody, CardHeader, Heading,Text, Button, Link, Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const gpBio = () => {
    const headerColor = useColorModeValue("#035E95" , "white") 
    const textColor = useColorModeValue("#ECD9D2" , "white")
    
  return (
    <Container 
    maxW="container.xl" 
    centerContent

    >
        <Flex
        py={[3, 7, 10]} 
        >
            <Card 
                w={[300, 450, 550]}
                h={[400, 550, 600]}
                // bg="#B9E2F4"
                borderRadius="1rem"
                mt="0.9rem"
                boxShadow= "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
            >
                <CardBody>
                    <CardHeader 
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="column"
                    >
                        <Heading
                            color={headerColor}
                            size='lg'
                        >
                            The Johns
                        </Heading>
                    </CardHeader>


                    <Box
                        mt="5rem"
                    >
                        <Text
                            textAlign="center"
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie est condimentum felis vulputate, sed dignissim massa porta. 
                        </Text>
                    </Box>
                </CardBody>
            </Card>
        </Flex>

        <Link href="/">
            <Button
                w="5rem"
                h="4rem"
                bg="#4462B5"
                mb="3rem"
                mt="1rem"
                color={textColor}
                display="inline"
            >
                <ChevronLeftIcon fontSize="2rem"/>
            </Button>
        </Link>
        
    </Container>
  )
}

export default gpBio