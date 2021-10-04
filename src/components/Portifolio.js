import React from 'react';
import {
    Box,
    Text,
    Flex,
    Stack,
    Heading,
    useMediaQuery
} from '@chakra-ui/react';
import Card from "components/Card";
import { portifolio } from "content.json";

function Portifolio() {
    const { upperDesc, bottomDesc, projects } = portifolio;
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return <Stack>
        <Flex
            direction={isNotSmallerScreen ? "row" : "column"}
            p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start" >

            <Box
                alignSelf="flex-start"
                mr={isNotSmallerScreen ? "16" : "0"}
            >

                <Heading
                    fontWeight="extrabold"
                    color="cyan.500"
                    size="3xl" >
                    {upperDesc}
                </Heading>
                <Text
                    fontSize="1xl"
                    color="gray.400" >
                    {bottomDesc}
                </Text>
            </Box>

            <Box
                flexGrow={1}
                alignSelf="center"
            >

                <Flex
                    direction={isNotSmallerScreen ? "row" : "column"}
                    justifyContent="flex-end"
                    wrap="wrap" >
                    {projects.map((itemProps, index) => <Card
                        key={`project${index}`}
                        {...itemProps} />)}
                </Flex>
            </Box>
        </Flex>
    </Stack>
}

export default Portifolio