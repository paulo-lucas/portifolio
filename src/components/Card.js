import React from "react";

function Card(props) {
    return <Flex
        rounded="xl"
        direction="column"
        mt={4}
        ml={isNotSmallerScreen ? 4 : 0}
        bg="gray.100"
        h="30vh"
        w="30vh"
        justify="flex-end"
        _hover={{ bg: "green.400", }} >

        <Icon
            as={DiWebplatform}
            p="4"
            w="24"
            h="24"
            color="black" />

        <Text
            color="black"
            p="4"
            fontSize="xl"
            fontWeight="semibold" >
            Web Apps
        </Text>
    </Flex>
}