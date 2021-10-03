import { Flex, Heading, IconButton, VStack, Spacer } from "@chakra-ui/react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ColorModeSwitcher } from "components/ColorModeSwitcher";
import Header from "components/Header";
import Profile from "components/Profile";
import Social from "components/Social";

function App() {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8"
          size="md"
          fontWeight="semibold"
          color="cyan.400" >
          plucas
        </Heading>

        <Spacer />

        <a href="https://www.linkedin.com/in/plucas-cer">
          <IconButton icon={<FaLinkedin />} isRound='true' />
        </a>

        <a href="https://www.instagram.com/paulo_lucasoc/">
          <IconButton ml={2} icon={<FaInstagram />} isRound='true' />
        </a>

        <a href="https://twitter.com/plucasdev">
          <IconButton ml={2} icon={<FaTwitter />} isRound='true' />
        </a>

        <a href="https://github.com/paulo-lucas">
          <IconButton ml={2} icon={<FaGithub />} isRound='true' />
        </a>

        <ColorModeSwitcher ml={8} isRound={true} />
      </Flex>

      <Header />
      <Profile />
      <Social />
    </VStack>
  );
}

export default App;
