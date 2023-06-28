import React from 'react';
import {
  Flex,
  Stack,
  useMediaQuery
} from '@chakra-ui/react';
import Card from "components/Card";
import { portfolio } from "content.json";

function Projects() {
  const { projects } = portfolio;
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return <Stack mt="8">
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      justifyContent="center"
      wrap="wrap" >
      {projects.map((itemProps, index) => <Card
        key={`project${index}`}
        {...itemProps} />)}
    </Flex>
  </Stack>
}

export default Projects