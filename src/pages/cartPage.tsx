import { Image } from "@chakra-ui/image";
import { Container, Flex, Text } from "@chakra-ui/layout";
import Layout from "../layout/layout";
import { useCart, useCartAction } from "../providers/cartProvider";
import removeSvg from "../svg/remove.svg";

const CartPage = (): JSX.Element => {
  const { cart } = useCart();
  const dispatch = useCartAction();

  const handleInc = (cartItem: any) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const handleDec = (cartItem: any) => {
    dispatch({ type: "DEC_PRODUCT", payload: cartItem });
  };

  const removeProduct = (cartItem: any) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  return (
    <Layout>
      <Container minH="100px" maxW="container.xl">
        <Text mt="8" fontSize="35px" fontWeight="600">
          Your Bikes
        </Text>
        <Flex w="full" justifyContent="space-between">
          <Flex flexDir="column">
            {cart.length
              ? cart.map((c: any) => {
                  return (
                    <Flex
                      key={c.id}
                      mt="10"
                      bg="#f8fafd"
                      rounded="14px"
                      w="1000px"
                      h="170px"
                    >
                      <Flex
                        rounded="14"
                        bg={c.bg}
                        w="340px"
                        h="full"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image w="160px" src={c.image} objectFit="cover" />
                      </Flex>
                      <Flex w="full" justifyContent="space-between">
                        <Flex
                          mb="2"
                          ml="4"
                          flexDir="column"
                          mt="2"
                          justifyContent="space-between"
                        >
                          <Flex flexDir="column">
                            <Text fontSize="25px" fontWeight="600">
                              {c.name}
                            </Text>
                            <Text
                              color="#7E7E7E"
                              mt="-1"
                              fontSize="13px"
                              w="500px"
                            >
                              {c.desc.slice(0, 140)}
                            </Text>
                          </Flex>
                          <Flex flexDir="column">
                            <Text fontSize="14px">Color : {c.color}</Text>
                            <Text fontSize="14px">Size : {c.size}</Text>
                          </Flex>
                        </Flex>
                        <Flex
                          mr="4"
                          mt="3"
                          mb="3"
                          flexDir="column"
                          alignItems="flex-end"
                          justifyContent="space-between"
                        >
                          <Text>$ {c.price}</Text>
                          <Flex alignItems="center">
                            <Flex
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Flex
                                w="25px"
                                h="25px"
                                justifyContent="center"
                                alignItems="center"
                                cursor="pointer"
                                onClick={() => handleDec(c)}
                              >
                                <Text fontWeight="md" fontSize="25px">
                                  -
                                </Text>
                              </Flex>
                              <Flex
                                w="25px"
                                h="25px"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <Text fontWeight="md" fontSize="25px">
                                  {c.qty}
                                </Text>
                              </Flex>
                              <Flex
                                w="25px"
                                h="25px"
                                justifyContent="center"
                                alignItems="center"
                                cursor="pointer"
                                onClick={() => handleInc(c)}
                              >
                                <Text fontWeight="md" fontSize="25px">
                                  +
                                </Text>
                              </Flex>
                            </Flex>
                            <Image
                              cursor="pointer"
                              ml="8"
                              w="16px"
                              src={removeSvg}
                              onClick={() => removeProduct(c)}
                            />
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  );
                })
              : "not"}
          </Flex>

          <Flex display={cart.length ? "flex" : "none"}>
            this is cart summer
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
};

export default CartPage;
