import { Center, Flex } from "@chakra-ui/react";
import { Container, Link, Text } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import logo from "../../svg/logo.svg";
import linkedin from "../../svg/linkedin.svg";
import twitter from "../../svg/twitter.svg";
import instagram from "../../svg/instagram.svg";
import github from "../../svg/github.svg";

const FooterComp = (): JSX.Element => {
  const items = [
    {
      title: "Company",
      one: "Terms of service",
      two: "Privacy policy",
      three: "Help center",
      four: "Contact",
      five: "About us",
      id: 1,
    },
    {
      title: "Policy",
      one: "Privacy Policy",
      two: "Return & Refund Policy",
      three: "Order & Delivery Policy",
      four: "Cancellation Policy",
      five: "Terms & Conditions",
      id: 2,
    },
    {
      title: "FAQ",
      one: "Manage Deliveries",
      two: "Account",
      three: "Payments",
      four: "Returns",
      five: "Orders",
      id: 3,
    },
    {
      title: "Support",
      one: "Contact us",
      two: "Online Chat",
      three: "Whatsapp",
      four: "Telegram",
      five: "Ticketing",
      id: 4,
    },
    {
      title: "About",
      one: "About us",
      two: "Careers",
      three: "In Press",
      four: "Blog",
      five: "Jobs",
      id: 5,
    },
  ];

  return (
    <Flex
      w="100%"
      minH="450px"
      h="auto"
      bg="#f9fafd"
      position="relative"
      mt="200px"
    >
      <Container
        maxW={[
          "container.sm",
          "container.sm",
          "container.md",
          "container.lg",
          "container.xl",
        ]}
        position="relative"
      >
        <Center>
          <Flex
            w={["80%", "90%", "98%", "full", "full"]}
            minH="90px"
            rounded="12px"
            p="3"
            top="-45px"
            bg="#4475F2"
            position="absolute"
            alignItems="center"
            justifyContent="space-between"
            flexDir={["column", "column", "row", "row", "row"]}
          >
            <Flex ml={["1", "1", "1", "8", "8"]} flexDir="column">
              <Text fontSize="22px" color="#f8fafd" fontWeight="700">
                Newsletter
              </Text>
              <Text fontSize="15px" color="#DAE3FC">
                Be the first one to know about discount, offers and events
              </Text>
            </Flex>
            <InputGroup
              w={["full", "60%", "370px", "370px", "370px"]}
              mr={["0", "0", "0", "8", "8"]}
              mt={["8px", "17px", "0px", "0px", "0px"]}
            >
              <Input
                _placeholder={{ color: "#f8fafd", fontWeight: "200" }}
                placeholder="Enter your email!"
                rounded="55px"
                bg="#608AF4"
                border="none"
              />
              <InputRightElement w="100px">
                <Button fontWeight="400" h="70%" color="#4475F2" rounded="55px">
                  submit
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Center>

        <Flex
          mt={["120px", "120px", "90px", "90px", "90px"]}
          justifyContent="space-between"
          alignItems="flex-start"
          flexDir={["column", "column", "row", "row", "row"]}
        >
          {items.map((item) => {
            return (
              <Flex
                key={item.id}
                mt="8"
                ml={["20", "10", "0", "0", "0"]}
                flexDir="column"
              >
                <Text fontSize="24px" fontWeight="700">
                  {item.title}
                </Text>
                <Text fontWeight="500" mt="3" color="#7E7E7E" fontSize="15px">
                  {item.one}
                </Text>
                <Text fontWeight="500" mt="3" color="#7E7E7E" fontSize="15px">
                  {item.two}
                </Text>
                <Text fontWeight="500" mt="3" color="#7E7E7E" fontSize="15px">
                  {item.three}
                </Text>
                <Text fontWeight="500" mt="3" color="#7E7E7E" fontSize="15px">
                  {item.four}
                </Text>
                <Text fontWeight="500" mt="3" color="#7E7E7E" fontSize="15px">
                  {item.five}
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Flex
          position={["static", "static", "absolute", "absolute", "absolute"]}
          bottom={["-10", "-10", "3", "4", "4"]}
          w={["90%", "90%", "95%", "98%", "98%"]}
          justifyContent="space-between"
        >
          <Image
            display={["none", "none", "block", "block", "block"]}
            src={logo}
          />
          <Flex
            flexDir={["column-reverse", "column-reverse", "row", "row", "row"]}
            mt={["10", "10", "0", "0", "0"]}
          >
            <Flex>
              <Link
                _focus={{}}
                isExternal
                href="https://www.linkedin.com/in/ali-turkaman-%F0%9F%94%A5-55704a21b/"
              >
                <Image
                  cursor="pointer"
                  _selection={{ bg: "transparent" }}
                  mr="4"
                  src={linkedin}
                />
              </Link>
              <Link _focus={{}} isExternal href="https://twitter.com/ATurkaman">
                <Image
                  cursor="pointer"
                  _selection={{ bg: "transparent" }}
                  mr="4"
                  src={twitter}
                />
              </Link>
              <Link
                _focus={{}}
                isExternal
                href="https://www.instagram.com/ali_turkaman_n/"
              >
                <Image
                  cursor="pointer"
                  _selection={{ bg: "transparent" }}
                  mr="4"
                  src={instagram}
                />
              </Link>
              <Link
                _focus={{}}
                isExternal
                href="https://github.com/aliturkamanjs"
              >
                <Image
                  cursor="pointer"
                  _selection={{ bg: "transparent" }}
                  mr="10"
                  src={github}
                />
              </Link>
            </Flex>

            <Flex mb={["26px", "26px", "0", "0", "0"]}>
              <Text mr="1" color="#7E7E7E">
                © 2022 created by
              </Text>
              <Link
                color="#7E7E7E"
                href="https://github.com/aliturkamanjs"
                isExternal
              >
                Ali Turkaman
              </Link>
            </Flex>
            
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default FooterComp;
