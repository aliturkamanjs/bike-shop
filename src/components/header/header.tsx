import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import bikeHeader from "../../svg/bike.svg";
import arrowDown from "../../svg/arrowDown.svg";

const Header = (): JSX.Element => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Flex color="#151515" fontWeight="bold" fontSize="110px">
        <Text>we</Text>{" "}
        <Text color="#00A3FF" ml="6">
          change
        </Text>
      </Flex>
      <Text mt="-55px" color="#151515" fontWeight="bold" fontSize="120px">
        perceptions
      </Text>
      <Image mt="-10" src={bikeHeader} />
      <Image mt="-8" src={arrowDown} />
    </Flex>
  );
};

export default Header;
