import React, { useState, useEffect } from "react";
import {
    Text,
    Icon,
    Flex,
    useMediaQuery,
    HStack,
    Image,
    Fade,
    VStack
} from '@chakra-ui/react';
import { getTechIcon } from "assets/icons"

function Card({ projectName, description, tech, mainImage }) {
    const [expandedContainer, setExpandedContainer] = useState(false);
    const [expandedContent, setExpandedContent] = useState(false);
    const [collapsedContent, setCollapsedContent] = useState(true);

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        handleInstantContentFade();
        setTimeout(handleFutureContentFade, 400);
    }, [expandedContainer])


    function handleInstantContentFade() {
        setCollapsedContent(false);
        setExpandedContent(false);
    }

    function handleFutureContentFade() { 
        setExpandedContent(expandedContainer);
        setCollapsedContent(!expandedContainer);
    }

    return <Flex
        rounded="xl"
        boxShadow="lg"
        direction="column"
        mt={4}
        ml={isNotSmallerScreen ? 4 : 0}
        h="45vh"
        w="30vh"
        overflow="hidden"
        pos="relative"
        cursor="pointer"
        transition="all 0.2s ease-out"
        _hover={{
            "-webkit-transform": "translate(0, -10px)",
            "-o-transform": "translate(0, -10px)",
            "transform": "translate(0, -10px)"
        }}
        onClick={() => setExpandedContainer(!expandedContainer)} >

        <Image src={mainImage} />

        <HStack
            w="100%"
            position="absolute"
            bottom="0"
            h={expandedContainer ? "100%" : "15vh"}
            p={expandedContainer ? "8" : "3"}
            align={expandedContainer ? "flex-start" : "center"}
            bgColor="cyan.400"
            transition="height 0.5s cubic-bezier(.8,-0.1,.3,1.3)" >

            <Fade in={collapsedContent} unmountOnExit>
                <HStack>
                    <Icon
                        mr="2"
                        as={getTechIcon(tech)}
                        w="20"
                        h="20"
                        color="white" />

                    <Text
                        color="white"
                        fontSize="xl"
                        fontWeight="semibold" >
                        {projectName}
                    </Text>
                </HStack>
            </Fade>

            <Fade in={expandedContent} unmountOnExit>
                <VStack
                    alignItems="flex-start"
                    justifyContent="flex-end" >
                    <Text
                        color="white"
                        fontSize="xl"
                        fontWeight="semibold" >
                        {projectName}
                    </Text>

                    <Text
                        color="white"
                        fontSize="lg" >
                        {description}
                    </Text>

                </VStack>
            </Fade>
        </HStack>
    </Flex >
}

export default Card