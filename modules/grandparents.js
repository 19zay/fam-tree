import { Box, Text, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, Heading, HStack, Image, Stack, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const grandparents = () => {
    const headerColor = useColorModeValue("#035E95" , "white") 
    const textColr = useColorModeValue("#4462B5" , "#424D9F")
    const textColor = useColorModeValue("white" , "white")
        
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
                h={[440, 640, 650]}
                // bg="#B9E2F4"
                borderRadius="1rem"
                mt={["0.6rem", "-2rem", "-3rem"]}
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
                            fontSize={["0.8rem", "1rem", "1rem"]}
                            fontWeight="600"
                            textAlign="center"
                            letterSpacing="-0.08rem"
                            lineHeight="1.1rem"
                        >
                            meet the first people from our lineage..
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
                        <Link href='/bioPage'>
                            <Box
                                w={["6rem", "8rem", "8rem" ]}
                                h={["2rem", "3rem", "3rem"]}
                                borderRadius="0.7rem"
                                bgColor={textColr}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                mr="0.5rem"
                            >
                                <Text
                                    fontWeight="700"
                                    color={textColor}
                                    textAlign="center"
                                    fontSize="0.8rem"
                                >
                                    The Oniludes                               
                                
                                </Text>
                            </Box>
                        </Link>

                        <Link href="/bioPage">
                            <Box
                                w={["6rem", "8rem", "8rem" ]}
                                h={["2rem", "3rem", "3rem"]}
                                borderRadius="0.7rem"
                                bgColor={textColr}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Text
                                    fontWeight="700"
                                    color={textColor}
                                    textAlign="center"
                                    fontSize="0.8rem"
                                >
                                    The Oyeniyis
                                </Text>
                            </Box>
                        </Link>

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
                        <Link href="/bioPage">
                            <Box
                                w={["6rem", "8rem", "8rem" ]}
                                h={["2rem", "3rem", "3rem"]}
                                borderRadius="0.7rem"
                                bgColor={textColr}
                                mr="2rem"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Text
                                    fontWeight="700"
                                    color={textColor}
                                    textAlign="center"
                                    fontSize="0.8rem"
                                >
                                    The Onjokos
                                </Text>
                            </Box>
                        </Link>

                        <Link href="/bioPage">
                            <Box
                                w={["6rem", "8rem", "8rem" ]}
                                h={["2rem", "3rem", "3rem"]}
                                borderRadius="0.7rem"
                                bgColor={textColr}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Text
                                    fontWeight="700"
                                    color={textColor}
                                    textAlign="center"
                                    fontSize="0.8rem"
                                >
                                    The Baruwa
                                </Text>
                            </Box>
                        </Link>
                  
                    </HStack>

                </CardBody>

                <Divider/>
          </Card>
      </Flex>

        <Link href="/grandMothers">
            <Button
                w="11rem"
                h="4rem"
                bg="#4462B5"
                mb="3rem"
                mt="1rem"
                color={textColor}
                display="inline"
            >
                Our Grandmothers
            </Button>
        </Link>
  </Container>
  )
}

export default grandparents