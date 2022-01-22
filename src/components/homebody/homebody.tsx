import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useCart, useCartAction } from "../../providers/cartProvider";
import { Center, Container, Flex, Text } from "@chakra-ui/layout";
import { products } from "../../data/data";
import { Link } from "react-router-dom";
import Card from "../../common/card";
import mapIcon from "../../svg/map.svg";
import goldenCup from "../../svg/goldenCup.svg";
import bikerIcon from "../../svg/bikerIcon.svg";
import { CheckInCart } from "../../utils/checkInCart";
import { contextProps } from "../../utils/dataInterface";

const HomeBody = (): JSX.Element => {
  const dispatch = useCartAction()
  const {cart} = useCart()

  const addToCart = (product : contextProps) => {
    dispatch({type: "ADD_TO_CART", payload: product})
  }

  const componyItems = [
    { name: "silverback", id: 1 },
    { name: "surly", id: 2 },
    { name: "shimano", id: 3 },
    { name: "trek", id: 4 },
    { name: "mavic", id: 5 },
    { name: "santa cruz", id: 6 },
    { name: "fox", id: 7 },
  ];

  const blogItems = [
    {
      title: "become champion",
      desc: "The passage experienced a surge in popularity during the 1960s when Letraset used it on  sheets,",
      icon: mapIcon,
      id: 1,
    },
    {
      title: "long distance",
      desc: "laying out pages with meaningless filler text can be very useful when  Letraset used it onthe , not content.",
      icon: goldenCup,
      id: 2,
    },
    {
      title: "bike rider",
      desc: "From its medieval origins to the digital era, learn everything there is to know about the  lorem ipsum passage.",
      icon: bikerIcon,
      id: 3,
    },
  ];

  return (
    <Container  maxW="container.xl">
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
        {products.slice(products.length - 2).map((product) => {
          return (
            <Card key={product.id} flexDir="column" p="0" rounded="22px" w="365px" h="365px">
              <Flex
                w="full"
                h="236px"
                rounded="22px"
                bg={product.bg}
                p="4"
                justifyContent="center"
                alignItems="center"
              >
                <Image w="270px" objectFit="cover" src={product.image} />
              </Flex>
              <Flex p="4" justifyContent="space-between">
                <Link to={{ pathname: `/bike/${product.id}`, state:  product  }}>
                <Flex flexDir="column">
                  <Text fontWeight="700" fontSize="23px">
                    {product.name}
                  </Text>
                  <Text fontSize="13px" mt="-2px" color="#7E7E7E" w="230px" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
                    {product.desc}
                  </Text>
                </Flex>
                </Link>
                <Text>{product.price}</Text>
              </Flex>
              <Button
                  fontSize="14px"
                  border="1px solid"
                  borderColor="#191919"
                  rounded="8"
                  _focus={{}}
                  _hover={{}}
                  h="30px"
                  w="full"
                  variant="outline"
                  onClick={()=> addToCart(product)}
                >
                  {CheckInCart(cart, product) ? "In Cart" : "Buy Now"}
                </Button>

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
          <Link to="/shop">
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

      <Flex mt="50px" w="full" justifyContent="space-between">
        {blogItems.map((item) => {
          return (
            <Card
              w="323px"
              h="335px"
              rounded="23px"
              display="flex"
              flexDir="column"
              justifyContent="space-between"
              alignItems="center"
              shadow="sm"
              key={item.id}
            >
              <Flex flexDir="column" alignItems="center">
                <Center h="130px">
                  <Image w="95px" src={item.icon} />
                </Center>
                <Text fontSize="25px" fontWeight="500">
                  {item.title}
                </Text>
                <Text color="#7E7E7E" fontSize="14px" textAlign="center">
                  {item.desc}
                </Text>
              </Flex>
              <Button
                w="130px"
                h="33px"
                rounded="6px"
                border="1px solid"
                borderColor="#151515"
                fontSize="15px"
                variant="outline"
                _focus={{}}
              >
                learn more
              </Button>
            </Card>
          );
        })}
      </Flex>
    </Container>
  );
};

export default HomeBody;
