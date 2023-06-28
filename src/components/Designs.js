import React from 'react';
import {
  Stack,
  Box,
  Heading,
  Divider,
  useMediaQuery
} from '@chakra-ui/react';
import { portfolio } from "content.json";

function Projects() {
  const { designs } = portfolio;
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return <Stack mt="8" align={"center"}>
    {designs.map(item => (
      <Box w="80vw">
        <Heading mb="2" display={"block"}>{item.title}</Heading>

        <iframe
          width={!!item.prototype && isNotSmallerScreen ? "70%" : "100%"}
          height="600"
          style={{ display: "inline-block", marginTop: "8px" }}
          title={item.title}
          src={item.url}
          allowfullscreen></iframe>

        {!!item.prototype && <iframe
          width={isNotSmallerScreen ? "30%" : "100%"}
          style={{
            display: "inline-block",
            marginTop: "8px",
            height: isNotSmallerScreen ? "600px" : "180vw"
          }}
          title={item.title}
          src={item.prototype}
          allowfullscreen></iframe>}

        <Divider mt="12" mb="8" />
      </Box>
    ))}

  </Stack>
}

export default Projects