import React, { useState, useEffect } from "react";
import {
    Text,
    Icon,
    Flex,
    useMediaQuery,
    HStack,
    Image,
    Fade,
    VStack,
    Spacer,
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
            p={collapsedContent ? "3" : "8"}
            align={expandedContainer ? "flex-start" : "center"}
            bgColor="cyan.400"
            transition="all 0.5s cubic-bezier(.8,-0.1,.3,1.3)" >

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