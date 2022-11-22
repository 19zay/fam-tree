import { Box, Text, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, Heading, HStack, Image, Stack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '@chakra-ui/react'

const grandparents = () => {
    const headerColor = useColorModeValue("#035E95" , "white") 
    const textColr = useColorModeValue("#4462B5" , "#424D9F")
    const textColor = useColorModeValue("#ECD9D2" , "white")
        
  return (
    <Container 
        maxW="container.xl" 
        centerContent

    >
        <Flex
            
        >
            <Card 
                w={[350, 450, 550]}
                h={[550, 650, 700]}
                // bg="#B9E2F4"
                borderRadius="1rem"
                mt="0.9rem"
                boxShadow= "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
            >
                <CardBody>
                    <Image 
                        src='https://i.pinimg.com/564x/e1/b8/53/e1b8532ee71c612de3f359e70f2fce1a.jpg'
                        objectFit="cover"
                        borderRadius="1rem"    
                    />

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
                            Welcome,
                        </Heading>

                        <Text
                            color={headerColor}
                            fontSize="1.2rem"
                            fontWeight="600"
                            textAlign="center"
                        >
                            Meet the first people from our lineage..
                        </Text>

                    </CardHeader>

                    <HStack
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mt="0.4rem"
                    >
                      {/* <Parent/>
                      <Offspring/> */}
                      <Box
                        w="8rem"
                        h="3rem"
                        borderRadius="full"
                        bgColor={textColr}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Text
                            fontWeight="500"
                            color={textColor}
                            textAlign="center"
                            fontSize="0.8rem"
                        >
                            The Oniludes
                        </Text>
                      </Box>

                      <Box
                        w="8rem"
                        h="3rem"
                        borderRadius="full"
                        bgColor={textColr}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                         <Text
                            fontWeight="500"
                            color={textColor}
                            textAlign="center"
                            fontSize="0.8rem"
                        >
                            The Lorems
                        </Text>
                      </Box>

                    </HStack>

                    <HStack
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mt="1rem"
                    >
                      {/* <Address/>
                      <Numbers/>
                      <DateOfBirth/> */}

                      <Box
                        w="8rem"
                        h="3rem"
                        borderRadius="full"
                        bgColor={textColr}
                        mr="1.6rem"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                         <Text
                            fontWeight="500"
                            color={textColor}
                            textAlign="center"
                            fontSize="0.8rem"
                        >
                            The Ipsums
                        </Text>
                      </Box>

                      <Box
                        w="8rem"
                        h="3rem"
                        borderRadius="full"
                        bgColor={textColr}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                         <Text
                            fontWeight="500"
                            color={textColor}
                            textAlign="center"
                            fontSize="0.8rem"
                        >
                            The Lorems
                        </Text>
                      </Box>
                  
                    </HStack>

                </CardBody>

                <Divider/>

                {/* <CardFooter
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

                </CardFooter> */}
          </Card>
      </Flex>
  </Container>
  )
}

export default grandparents