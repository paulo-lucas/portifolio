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
import { portifolio } from 'content.json'
import Projects from "components/Projects";

function Portifolio() {
    const { upperDesc, bottomDesc } = portifolio
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return <Stack px={isNotSmallerScreen ? "32" : "4"} >
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
            <TabList mb='1em'>
                <Tab>Projects</Tab>
                <Tab>Designs</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Projects />
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Stack>
}

export default Portifolio