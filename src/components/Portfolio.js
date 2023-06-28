import React from 'react';
import {
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    TabList,
    Stack,
    Box,
    Heading,
    Text,
    useMediaQuery
} from '@chakra-ui/react';
import { portfolio } from 'content.json'
import Projects from "components/Projects";
import Designs from "components/Designs";

function Portfolio() {
    const { upperDesc, bottomDesc } = portfolio
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return <Stack px={isNotSmallerScreen ? "32" : "4"} w="100vw">
        <Box
            alignSelf="flex-start"
            mb={8} >

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

        <Tabs
            isFitted
            variant='line'
            w="100%">
            <TabList mb='1'>
                <Tab>Projects</Tab>
                <Tab>Designs</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Projects />
                </TabPanel>
                <TabPanel>
                    <Designs />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Stack>
}

export default Portfolio