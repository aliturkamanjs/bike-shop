import { Flex } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import { Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import logo from "../../svg/logo.svg"
import search from "../../svg/search.svg"
import cartSvg from "../../svg/cart.svg"
import { Link, NavLink } from "react-router-dom"
import { useCart } from "../../providers/cartProvider"

const NavigationComp = (): JSX.Element => {
  const { cart } = useCart()

  const navItem = [
    { name: "Home", link: "/", id: 1 },
    { name: "Shop", link: "/shop", id: 3 },
    { name: "Cart", link: "/cart", id: 2 },
  ]

  return (
    <Flex
      w="full"
      h="60px"
      p="3"
      justifyContent="space-between"
      alignItems="center"
      color="#7E7E7E"
      style={{ fontFamily: "ralewayBold" }}
    >
      <Flex alignItems="center">
        <Link to="/">
          <Image cursor="pointer" w="80px" src={logo} />
        </Link>
        {navItem.map((item) => {
          return (
            <NavLink
              exact
              activeStyle={{ color: "#000000", fontWeight: "bold" }}
              to={item.link}
              key={item.id}
            >
              <Text
                display={
                  item.name === "Home"
                    ? ["none", "none", "block", "block", "block"]
                    : "block"
                }
                ml={item.name === "Bikes" ? "10" : "4"}
                fontSize="17px"
                cursor="pointer"
                fontWeight="500"
              >
                {item.name}
              </Text>
            </NavLink>
          )
        })}
      </Flex>

      <Flex style={{ fontFamily: "ralewayBold" }}>
        <Image
          cursor="pointer"
          mr="3"
          w="26px"
          src={search}
          display={["none", "none", "block", "block", "block"]}
        />
        <Link to="/cart">
          <Flex position="relative">
            <Image cursor="pointer" w="26px" src={cartSvg} />
            <Flex
              display={cart.length === 0 ? "none" : "flex"}
              rounded="50px"
              w="5"
              h="5"
              bg="#F05454"
              color="#f8fafd"
              top="-2"
              right="-2"
              position="absolute"
              alignItems="center"
              justifyContent="center"
              border="1px solid #f8fafd"
            >
              <Text fontWeight="500" fontSize="13px">
                {cart.length}
              </Text>
            </Flex>
          </Flex>
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
          display={["none", "none", "block", "block", "block"]}
          style={{ fontFamily: "ralewayMedium" }}
        >
          Sgin in/Sign up
        </Button>
      </Flex>
    </Flex>
  )
}

export default NavigationComp
