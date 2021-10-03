import React from 'react';
import {
    Box,
    Icon,
    Text,
    Flex,
    Heading,
    useMediaQuery
} from '@chakra-ui/react';
import {
    DiAndroid,
    DiCodeigniter,
    DiWebplatform
} from "react-icons/di";

function Portifolio() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }} >

        <Box
            alignSelf="center"
            p="16" >

            <Heading
                fontWeight="extrabold"
                color="cyan.500"
                size="3xl" >
                Check out
            </Heading>
            <Text
                fontSize="1xl"
                color="gray.400" >
                some of my projects
            </Text>
        </Box>

        <Box
            alignSelf="center"
            p="16" >

            <Flex
                direction={isNotSmallerScreen ? "row" : "column"}
                mt={8} >

                <Flex
                    rounded="xl"
                    direction="column"
                    mt={4}
                    bg="blue.400"
                    h="30vh"
                    w="30vh"
                    justify="flex-end" >

                    <Icon
                        color="white"
                        p="4"
                        as={DiAndroid}
                        w="24"
                        h="24" />

                    <Text
                        color="white"
                        p="4"
                        fontSize="xl"
                        fontWeight="semibold" >
                        Android Apps
                    </Text>

                </Flex>



                <Flex
                    rounded="xl"
                    direction="column"
                    mt={4} ml={isNotSmallerScreen ? 4 : 0}
                    bg="gray.100"
                    h="30vh"
                    w="30vh"
                    justify="flex-end"
                    _hover={{ bg: "teal.400", }} >

                    <Icon
                        color="black"
                        p="4"
                        as={DiCodeigniter}
                        w="24"
                        h="24" />

                    <Text
                        color="black"
                        p="4"
                        fontSize="xl"
                        fontWeight="semibold" >
                        Flutter Apps
                    </Text>

                </Flex>

                <Flex
                    rounded="xl"
                    direction="column"
                    mt={4} ml={isNotSmallerScreen ? 4 : 0}
                    bg="gray.100"
                    h="30vh"
                    w="30vh"
                    justify="flex-end"
                    _hover={{ bg: "teal.400", }} >

                    <Icon
                        color="black"
                        p="4"
                        as={DiCodeigniter}
                        w="24"
                        h="24" />

                    <Text
                        color="black"
                        p="4"
                        fontSize="xl"
                        fontWeight="semibold" >
                        Flutter Apps
                    </Text>

                </Flex>


            </Flex>
        </Box>
    </Flex>
}

export default Portifolio