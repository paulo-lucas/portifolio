import React from "react";
import {
    Box,
    Text,
    Circle,
    Flex,
    Stack,
    useColorMode,
    useMediaQuery,
    Button,
    Image
} from "@chakra-ui/react";
import { header } from "content.json"

function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const { beforeName, name, bio, actionButton, avatar } = header;

    return <Stack>
        <Circle
            pos="absolute"
            bg="blue.100"
            opacity="0.1"
            w="300px" h="300px"
            alignSelf="flex-end"
            zIndex={0.1} />

        <Flex
            direction={isNotSmallerScreen ? "row" : "column"}
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

            <Image
                alignSelf="center"
                mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "24"}
                borderRadius="full"
                backgroundColor="transparent"
                boxShadow="lg"
                boxSize="300px"
                src={avatar}
                zIndex={1} />
        </Flex>
    </Stack>
}

export default Header