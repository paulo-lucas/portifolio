import React from "react";
import {
    Flex,
    Heading,
    IconButton,
    Spacer
} from "@chakra-ui/react";
import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    // FaHackerrank
} from "react-icons/fa";
// import {
//     SiCodewars
// } from 'react-icons/si';
import { ColorModeSwitcher } from "components/ColorModeSwitcher";
import { contact } from 'content.json'

function Contact() {
    const { heading, links } = contact;

    return <Flex w="100%">
        <Heading
            ml="8"
            size="md"
            fontWeight="semibold"
            color="cyan.400" >
            {heading}
        </Heading>

        <Spacer />

        <IconButton
            icon={<FaLinkedin />}
            isRound='true'
            onClick={() => window.open(links.linkedin)} />

        <IconButton
            ml={2}
            icon={<FaInstagram />}
            isRound='true'
            onClick={() => window.open(links.instagram)} />

        <IconButton
            ml={2}
            icon={<FaTwitter />}
            isRound='true'
            onClick={() => window.open(links.twitter)} />

        {/* <IconButton
            ml={2}
            icon={<FaHackerrank />}
            isRound='true'
            onClick={() => window.open(links.hackerrank)} />

        <IconButton
            ml={2}
            icon={<SiCodewars />}
            isRound='true'
            onClick={() => window.open(links.codewars)} /> */}

        <IconButton
            ml={2}
            icon={<FaGithub />}
            isRound='true'
            onClick={() => window.open(links.github)} />


        <ColorModeSwitcher ml={8} isRound={true} />
    </Flex>
}

export default Contact;