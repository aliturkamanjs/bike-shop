import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import logo from "../../svg/logo.svg";
import search from "../../svg/search.svg";
import cart from "../../svg/cart.svg";
import { Link } from "react-router-dom";

const NavigationComp = (): JSX.Element => {
  const navItem = [
    { name: "Bikes", link: "/shop", id: 1 },
    { name: "Riders", link: "/shop", id: 2 },
    { name: "Shop", link: "/shop", id: 3 },
  ];

  return (
    <Flex
      w="full"
      h="60px"
      p="3"
      justifyContent="space-between"
      alignItems="center"
      color="#7E7E7E"
    >
      <Flex alignItems="center">
        <Link to="/">
          <Image cursor="pointer" w="80px" src={logo} />
        </Link>
        {navItem.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
              <Text
                ml={item.name === "Bikes" ? "10" : "4"}
                fontSize="17px"
                cursor="pointer"
                fontWeight="500"
              >
                {item.name}
              </Text>
            </Link>
          );
        })}
      </Flex>

      <Flex>
        <Image cursor="pointer" mr="3" w="21px" src={search} />
        <Link to="/cart">
        <Image cursor="pointer" w="21px" src={cart} />
        </Link>

        <Button
          ml="4"
          h="25px"
          bg="transparent"
          rounded="0"
          borderLeft=".3px solid red"
          borderLeftColor="#D9D9D9"
          fontSize="17px"
          _focus={{}}
          _hover={{}}
          _active={{}}
        >
          Sgin in/Sign up
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavigationComp;
