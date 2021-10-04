import React, { useState, useEffect, useCallback } from "react";
import {
    Text,
    Icon,
    Flex,
    useMediaQuery,
    HStack,
    Image,
    Fade,
    IconButton,
    Tooltip
} from '@chakra-ui/react';
import { FaGithub, FaChevronCircleRight } from "react-icons/fa";
import { getTechIcon } from "assets/icons"

function Card({ projectName, description, tech, mainImage, repo, live }) {
    const [expandedContainer, setExpandedContainer] = useState(false);
    const [expandedContent, setExpandedContent] = useState(false);
    const [collapsedContent, setCollapsedContent] = useState(true);

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const handleInstantContentFade = useCallback(() => {
        setExpandedContent(false);
        setCollapsedContent(false);
    }, [setCollapsedContent, setExpandedContent])

    const handleFutureContentFade = useCallback(() => {
        setExpandedContent(expandedContainer);
        setCollapsedContent(!expandedContainer);
    }, [setExpandedContent, setCollapsedContent, expandedContainer])

    useEffect(() => {
        handleInstantContentFade();
        setTimeout(handleFutureContentFade, 400);
    }, [expandedContainer, handleInstantContentFade, handleFutureContentFade])

    return <Flex
        rounded="xl"
        boxShadow="lg"
        direction="column"
        mt={4}
        ml={isNotSmallerScreen ? 4 : 0}
        h={isNotSmallerScreen ? "45vh" : "60vh"}
        w={isNotSmallerScreen ? "30vh" : "40vh"}
        maxW="90vw"
        overflow="hidden"
        pos="relative"
        cursor="pointer"
        transition="all 0.2s ease-out"
        _hover={{  transform: "translate(0, -10px)" }}
        onClick={() => setExpandedContainer(!expandedContainer)} >

        <Image src={mainImage} />

        <HStack
            w="100%"
            position="absolute"
            bottom="0"
            h={expandedContainer ? "100%" : "34%"}
            p={collapsedContent ? "4" : "8"}
            align={expandedContainer ? "flex-start" : "center"}
            bgColor="cyan.400"
            transition="all 0.7s cubic-bezier(.8,-0.1,.3,1.3)" >

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
                <Flex
                    direction="column" >
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

                    <HStack mt="4">
                        {repo && <Tooltip
                            label="See repository"
                            color="gray.300"
                            bgColor="gray.900" >
                            <IconButton
                                bgColor="cyan.500"
                                color="white"
                                size="lg"
                                icon={<FaGithub />}
                                isRound='true'
                                onClick={() => window.open(repo)} />
                        </Tooltip>}

                        {live && <Tooltip
                            label="See project"
                            color="gray.300"
                            bgColor="gray.900" >
                            <IconButton
                                bgColor="cyan.500"
                                color="white"
                                size="lg"
                                icon={<FaChevronCircleRight />}
                                isRound='true'
                                onClick={() => window.open(live)} />
                        </Tooltip>}
                    </HStack>
                </Flex>
            </Fade>
        </HStack>
    </Flex >
}

export default Card