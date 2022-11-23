import { Box, Text, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, Heading, HStack, Image, Stack, Menu, MenuButton, MenuItem, MenuList, Button, Select } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const grandMoms = () => {
    
    const headerColor = useColorModeValue("#6C4A6D" , "white") 
    const textColr = useColorModeValue("white" , "white")
    const textColor = useColorModeValue("#ECD9D2" , "white")
    const divColor = useColorModeValue("#9CA3BD" , "#1A202C")
        
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
                h={[500, 650, 700]}
                // bg="#B9E2F4"
                borderRadius="1rem"
                mt="0.9rem"
                boxShadow= "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
            >
                <CardBody>
                    <Image 
                        src='https://static.vecteezy.com/system/resources/previews/013/257/063/non_2x/grandma-and-her-grandchildren-are-happy-the-old-lady-hugs-the-children-the-concept-of-family-generations-communication-graphics-vector.jpg'
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
                            textAlign="center"
                        >
                            Our Beloved Grandmoms,
                        </Heading>

                        <Text
                            color={headerColor}
                            fontSize={["0.8rem", "1.2rem", "1.2rem"]}
                            fontWeight="600"
                            textAlign="center"
                            letterSpacing="-0.08rem"
                            lineHeight="1.1rem"
                        >
                           and their kids..
                        </Text>

                    </CardHeader>

                        <HStack
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            mt="0.4rem"
                        >
                            <Box
                                w="7rem"
                                h="2.6rem"
                                bg={divColor}
                                borderRadius="full"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Menu>
                                    <MenuButton 
                                        color={textColr}
                                        fontSize="0.8rem" 
                                        fontWeight="600"
                                    >
                                        Mrs Onilude
                                    </MenuButton>
                                    
                                    <MenuList>
                                        <Link href="/famPage"> 
                                            <MenuItem>Lorem</MenuItem>
                                        </Link>
                                    
                                        <Link href="/famPage"> 
                                            <MenuItem>Ipsum</MenuItem>
                                        </Link>

                                        <Link href="/famPage"> 
                                            <MenuItem>Ipsum</MenuItem>
                                        </Link>
                                    </MenuList>
                                </Menu>  
                            </Box>

                            <Box
                                w="7rem"
                                h="2.6rem"
                                bg={divColor}
                                borderRadius="full"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Menu>
                                    <MenuButton 
                                        color={textColr}
                                        fontSize="0.8rem" 
                                        fontWeight="600"
                                    >
                                        Mrs Onilude
                                    </MenuButton>
                                    
                                    <MenuList>
                                        <Link href="/famPage"> 
                                            <MenuItem>Lorem</MenuItem>
                                        </Link>
                                    
                                        <Link href="/famPage"> 
                                            <MenuItem>Ipsum</MenuItem>
                                        </Link>

                                        <Link href="/famPage"> 
                                            <MenuItem>Ipsum</MenuItem>
                                        </Link>
                                    </MenuList>
                                </Menu>  
                            </Box>
                        </HStack>
                       
                       <HStack
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mt="1rem"                           
                        >
                            <Box
                                w="7rem"
                                h="2.6rem"
                                bg={divColor}
                                borderRadius="full"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                mr="3rem"
                            >
                                <Menu>
                                    <MenuButton 
                                        color={textColr}
                                        fontSize="0.8rem" 
                                        fontWeight="600"
                                    >
                                        Mrs Onilude
                                    </MenuButton>
                                    
                                    <MenuList>
                                        <Link href="/famPage"> 
                                            <MenuItem>Lorem</MenuItem>
                                        </Link>
                                    
                                        <Link href="/famPage"> 
                                            <MenuItem>Ipsum</MenuItem>
                                        </Link>

                                        <Link href="/famPage"> 
                                            <MenuItem>Ipsum</MenuItem>
                                        </Link>
                                    </MenuList>
                                </Menu>  
                            </Box>

                            <Box
                                w="7rem"
                                h="2.6rem"
                                bg={divColor}
                                borderRadius="full"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Menu>
                                    <MenuButton 
                                        color={textColr}
                                        fontSize="0.8rem" 
                                        fontWeight="600"
                                    >
                                        Mrs Onilude
                                    </MenuButton>
                                    
                                    <MenuList>
                                        <Link href="/famPage"> 
                                            <MenuItem>Lorem</MenuItem>
                                        </Link>
                                    
                                        <Link href="/famPage"> 
                                            <MenuItem>Ipsum</MenuItem>
                                        </Link>

                                        <Link href="/famPage"> 
                                            <MenuItem>Ipsum</MenuItem>
                                        </Link>
                                    </MenuList>
                                </Menu>  
                            </Box>
                       </HStack>

                  
                </CardBody>

                <Divider/>
          </Card>
      </Flex>

  </Container>
  )
}

export default grandMoms