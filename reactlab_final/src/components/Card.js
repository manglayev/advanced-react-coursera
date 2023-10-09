import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
  <nav>
      <VStack borderRadius='lg'  objectFit='cover' bg="white">
        <Image borderRadius='lg' objectFit='cover' src={imageSrc} />      
        <Text p="2" as='b' color='black' alignSelf="flex-start">{title}</Text>
        <Text p="2" color='grey'>{description}</Text>
        <HStack alignSelf="flex-start"><Text p="2" color='black'>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text></HStack>        
      </VStack>
  </nav>
)};
export default Card;