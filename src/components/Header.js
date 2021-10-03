import React from "react";
import {
    Box,
    Text,
    Circle,
    Flex,
    Stack,
    useColorMode,
    useMediaQuery,
    Button
} from "@chakra-ui/react";
import { header } from "content.json"

function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const { beforeName, name, bio, actionButton } = header;

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
                    {beforeName}
                </Text>

                <Text
                    fontSize="7xl"
                    fontWeight="bold"
                    bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                    bgClip="text" >
                    {name}
                </Text>

                <Text
                    color={isDark ? "gray.200" : "gray.500"} >
                    {bio}
                </Text>

                <Button
                    mt={8}
                    colorScheme="blue"
                    onClick={() => window.open(actionButton.action)} >
                    {actionButton.text}
                </Button>
            </Box>
        </Flex>
    </Stack>
}

export default Header