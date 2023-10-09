import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return(
    <VStack backgroundColor="white" borderRadius="2xl">
      <Image src={imageSrc} borderTopRightRadius="2xl" borderTopLeftRadius="2xl" />
      <VStack color="black" p={5} alignItems="flex-start">
        <Heading size="md">{title}</Heading>
        <Text color="#515356">{description}</Text>
        <a href="#">See More <FontAwesomeIcon icon={ faArrowRight } size="1x" /></a>
      </VStack>
    </VStack>
  );
};

export default Card;
