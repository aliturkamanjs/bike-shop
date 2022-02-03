import {
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import freeShipping from "../svg/freeShipping.svg";
import box from "../svg/box.svg";
import Layout from "../layout/layout";
import startIcon from "../svg/start.svg";
import { useCart, useCartAction } from "../providers/cartProvider";
import { CheckInCart } from "../utils/checkInCart";

const BikeDetail = (history: any): JSX.Element => {
  const { state } = history.location;
  const { cart } = useCart();
  const dispatch = useCartAction();


  const addToCart: AddTodCartProps = (state) => {
    dispatch({ type: "ADD_TO_CART", payload: state });
  };

  return (
    <Layout>
      <Container
        minH={["100vh", "88vh", "98vh", "98vh", "72vh"]}
        maxW="container.xl"
      >
        <Divider mt="6" mb="6" borderColor="#E3E3E3" />
        <Flex
          h="400px"
          pr={["1", "3", "4", "8", "0"]}
          pl={["1", "3", "4", "8", "0"]}
          flexDir={["column", "column", "column", "column", "row"]}
        >
          <Flex flex={1} flexDir="column">
            <Text fontSize="43px">{state.name}</Text>
            <Text fontSize="16px" mt="-7px" color="#3E3E3E">
              {state.desc}
            </Text>
            <Image mt="80px" w="180px" src={startIcon} />
            <Text mt="2" mb="5">
              $ {state.price}
            </Text>
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
              onClick={() => addToCart(state)}
            >
              {CheckInCart(cart, state) ? "In Cart" : "By Now"}
            </Button>
            <Divider mt="4" mb="4" borderColor="#E3E3E3" />
            <Flex w="full" justifyContent="center">
              <Button
                h="28px"
                fontSize="14px"
                background="transparent"
                _hover={{}}
                _focus={{}}
                _active={{}}
                leftIcon={<Image w="13px" src={freeShipping} />}
              >
                Free Shipping
              </Button>
              <Button
                h="28px"
                fontSize="14px"
                background="transparent"
                _hover={{}}
                _focus={{}}
                _active={{}}
                leftIcon={<Image w="13px" src={box} />}
              >
                3–4 weeks
              </Button>
            </Flex>
          </Flex>
          <Flex
            ml={["0", "0", "0", "0", "20"]}
            mt={["45px", "40px", "50px", "70px", "0px"]}
            flex={1}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              p="4"
              w="full"
              bg={state.bg}
              rounded="35px"
            >
              <Image objectFit="cover" w="500px" src={state.image} />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
};

export default BikeDetail;
