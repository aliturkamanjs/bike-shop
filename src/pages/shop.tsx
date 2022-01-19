import {
  Container,
  Divider,
  Flex,
  Image,
  Select,
  Text,
  Button,
  Center
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Card from "../common/card";
import { products } from "../data/data";
import Layout from "../layout/layout";
import { useCartAction } from "../providers/cartProvider";

const ShopPage = (): JSX.Element => {
  const dispatch = useCartAction();

  const addToCart = (product: any) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <Container minH="1800px" maxW="container.xl">
        <Flex mt="10" w="full" justifyContent="space-between">
          <Flex flexDir="column">
            <Text fontSize="35px" fontWeight="600" color="#191919">
              Find your favorite bike
            </Text>
            <Text mt="-4px" color="#7E7E7E">
              The purpose of lorem ipsum is to create a natural looking
            </Text>
          </Flex>
          <Select
            w="230px"
            h="30px"
            fontSize="15px"
            placeholder="Select option"
          >
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>
        <Divider mt="8" mb="8" borderColor="#E3E3E3" />
        <Flex justifyContent="space-between" flexWrap="wrap">
          {products.map((product) => {
            return (
              <Card
                mb="14"
                key={product.id}
                flexDir="column"
                p="0"
                rounded="22px"
                w="365px"
                h="365px"
                boxShadow="sm"
              >
                <Flex
                  w="full"
                  h="236px"
                  rounded="22px"
                  p="4"
                  justifyContent="center"
                  alignItems="center"
                  bg={product.bg}
                >
                  <Image w="270px" objectFit="cover" src={product.image} />
                </Flex>
                <Link to={{ pathname: `/bike/${product.id}`, state: product }}>
                  <Flex p="4" justifyContent="space-between">
                    <Flex flexDir="column">
                      <Text fontWeight="700" fontSize="23px">
                        {product.name}
                      </Text>
                      <Text
                        w="230px"
                        fontSize="13px"
                        mt="-2px"
                        color="#7E7E7E"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                      >
                        {product.desc}
                      </Text>
                    </Flex>
                    <Text>$ {product.price}</Text>
                  </Flex>
                </Link>
                <Center>
                  <Button
                    fontSize="14px"
                    border="1px solid"
                    borderColor="#191919"
                    rounded="8"
                    _focus={{}}
                    _hover={{}}
                    h="30px"
                    w="92%"
                    variant="outline"
                    onClick={() => addToCart(product)}
                  >
                    Buy Now
                  </Button>
                </Center>
              </Card>
            );
          })}
        </Flex>
      </Container>
    </Layout>
  );
};

export default ShopPage;
