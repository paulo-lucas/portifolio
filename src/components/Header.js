import {
    Box,
    Text,
    Circle,
    Flex,
    Stack,
    useColorMode,
    useMediaQuery
} from '@chakra-ui/react'
import React from 'react'

function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return <Stack>
        <Circle
            pos="absolute"
            bg="blue.100"
            opacity="0.1"
            w="300px" h="300px"
            alignSelf="flex-end" />

        <Flex
            direction={isNotSmallerScreen ? "row" : "collumn"}
            spacing="200px"
            p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start" >

            <Box
                mt={isNotSmallerScreen ? "0" : "16"}
                align="flex-start" >

                <Text
                    fontSize="5xl"
                    fontWeight="semibold" >
                    Hi, I am
                </Text>

                <Text
                    fontSize="7xl"
                    fontWeight="bold"
                    bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                    bgClip="text" >
                    Paulo Lucas
                </Text>

                <Text
                    color={isDark ? "gray.200" : "gray.500"} >
                    Web and mobile developer, Computer Science student - Node.js, Ruby on Rails, React.js, React Native
                </Text>

            </Box>
        </Flex>
    </Stack>
}

export default Header