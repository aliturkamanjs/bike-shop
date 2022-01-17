import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Center, Container, Flex, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import ButtonComp from "../../common/buttonComp";
import Card from "../../common/card";
import { products } from "../../data/data";
import mapIcon from "../../svg/map.svg";

const HomeBody = (): JSX.Element => {
  const componyItems = [
    { name: "silverback", id: 1 },
    { name: "surly", id: 2 },
    { name: "shimano", id: 3 },
    { name: "trek", id: 4 },
    { name: "mavic", id: 5 },
    { name: "santa cruz", id: 6 },
    { name: "fox", id: 7 },
  ];

  return (
    <Container minH="1800px" maxW="container.xl">
      <Center mt="10">
        <Text fontSize="18" fontWeight="600" color="#A6A6A6">
          Over 2.000 + trusted partner around the world
        </Text>
      </Center>
      <Flex w="full" justifyContent="space-between" mt="10">
        {componyItems.map((item) => {
          return (
            <Text key={item.id} fontSize="19" fontWeight="700" color="#A6A6A6">
              {item.name}
            </Text>
          );
        })}
      </Flex>

      <Text mt="20" fontWeight="bold" fontSize="46px" mb="5" color="#191919">
        New Bikes
      </Text>
      <Flex justifyContent="space-between">
        {products.map((product) => {
          return (
            <Card flexDir="column" p="0" rounded="22px" w="365px" h="365px">
              <Flex
                w="full"
                h="236px"
                rounded="22px"
                bg={product.bg}
                p="4"
                justifyContent="center"
                alignItems="center"
              >
                <Image objectFit="cover" src={product.image} />
              </Flex>
              <Flex p="4" justifyContent="space-between">
                <Flex flexDir="column">
                  <Text fontWeight="700" fontSize="23px">
                    {product.name}
                  </Text>
                  <Text fontSize="13px" mt="-2px" color="#7E7E7E">
                    {product.desc}
                  </Text>
                </Flex>
                <Text>{product.price}</Text>
              </Flex>
              <ButtonComp>Buy Now</ButtonComp>
            </Card>
          );
        })}
        <Flex
          w="325px"
          h="365px"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="30px" fontWeight="700">
            Want to see more?
          </Text>
          <Text color="#7E7E7E" fontSize="15px" mt="-1">
            Explore more of trending bikes
          </Text>
          <Link to="/store">
            <Button
              _focus={{}}
              _active={{ bg: "#494949" }}
              _hover={{ bg: "#272727" }}
              bg="#191919"
              color="#f9fafd"
              fontSize="14px"
              h="29px"
              mt="4"
              mb="8"
            >
              View all
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt="120px"
      >
        <Text fontWeight="bold" fontSize="41px" color="#191919">
          become a biker in seconds
        </Text>
        <Text mt="-1" fontSize="18px" fontWeight="500" color="#A6A6A6">
          we’ve got everything you need to start biker
        </Text>
      </Flex>
      <Flex>
        <Card
          w="323px"
          h="355px"
          rounded="23px"
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <Center h="130px">
            <Image src={mapIcon} />
          </Center>
          <Text fontSize="25px" fontWeight="500">
            long distance
          </Text>
          <Text color="#7E7E7E" fontSize="14px" textAlign="center">
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on sheets,
          </Text>
          <Button variant="outline">learn more</Button>
        </Card>
      </Flex>
    </Container>
  );
};

export default HomeBody;
