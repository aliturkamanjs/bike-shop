import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Container, Divider, Flex, Text } from "@chakra-ui/layout";
import Card from "../common/card";
import Layout from "../layout/layout";
import { useCart, useCartAction } from "../providers/cartProvider";

const CartPage = (): JSX.Element => {
  const { cart } = useCart();
  const dispatch = useCartAction();


  const handleInc = (cartItem: any) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const handleDec = (cartItem: any) => {
    dispatch({ type: "DEC_PRODUCT", payload: cartItem });
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
                      w="900px"
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
                          <Text>$ {c.price * c.qty}</Text>
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
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  );
                })
              : "not"}
          </Flex>

          <CartSummery />
        </Flex>
      </Container>
    </Layout>
  );
};

export default CartPage;

export function CartSummery() {
  const { cart, total } = useCart();

  const totalPrice = cart.length
    ? cart.reduce((acc: any, curr: any) => acc + curr.qty * curr.price, 0)
    : 0;

  return (
    <Card
      display={cart.length ? "flex" : "none"}
      flexDir="column"
      position="relative"
      p="4"
      mt="10"
      bg="#f8fafd"
      rounded="14px"
      w="300px"
      h="260px"
    >
      <Text fontSize="21px" fontWeight="500">
        order summery
      </Text>
      <Divider mt="3" mb="3" borderColor="#E3E3E3" />
      <Flex w="full" justifyContent="space-between" color="#4B4B4B">
        <Text>original price</Text>
        <Text>$ {totalPrice}</Text>
      </Flex>
      <Flex mt="3" w="full" justifyContent="space-between" color="#4B4B4B">
        <Text>cart discount</Text>
        <Text>$ {totalPrice - total}</Text>
      </Flex>
      <Divider mt="3" mb="3" borderColor="#E3E3E3" />
      <Flex w="full" mb="3" justifyContent="space-between" color="#4B4B4B">
        <Text>total</Text>
        <Text>$ {total}</Text>
      </Flex>
      <Button
        fontSize="14px"
        border="1px solid"
        borderColor="#191919"
        rounded="8"
        _focus={{}}
        _hover={{}}
        h="30px"
        w="90%"
        variant="outline"
        position="absolute"
        bottom="3"
      >
        Checkout
      </Button>
    </Card>
  );
}
