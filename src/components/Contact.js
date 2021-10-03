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

    const ContactButton = ({ icon, link }) => <IconButton
        ml="2"
        transition="transform 0.5s ease-out"
        _hover={{
            transform: "rotate(360deg)"
        }}
        icon={icon}
        isRound='true'
        onClick={() => window.open(link)} />


    return <Flex w="100%">
        <Heading
            ml="8"
            size="md"
            fontWeight="semibold"
            color="cyan.400" >
            {heading}
        </Heading>

        <Spacer />

        <ContactButton
            icon={<FaLinkedin />}
            link={links.linkedin} />

        <ContactButton
            icon={<FaInstagram />}
            link={links.instagram} />

        <ContactButton
            icon={<FaTwitter />}
            link={links.twitter} />

        {/* <ContactButton
            icon={<FaHackerrank />}
            link={links.hackerrank} />

        <ContactButton
            icon={<SiCodewars />}
            link={links.codewars} /> */}

        <ContactButton
            icon={<FaGithub />}
            link={links.github} />


        <ColorModeSwitcher
            transition="transform 0.5s ease-out"
            _hover={{
                transform: "rotate(360deg)"
            }}
            ml={8}
            isRound={true} />
    </Flex>
}

export default Contact;