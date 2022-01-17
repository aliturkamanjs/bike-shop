import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";

const ButtonComp = ({ children }: { children: string }): JSX.Element => {
  return (
    <Center>
      <Button
        fontSize="14px"
        border="1px solid"
        borderColor="#191919"
        rounded="8"
        _focus={{}}
        _hover={{}}
        h="30px"
        w="91%"
        m="auto"
        variant="outline"
      >
        {children}
      </Button>
    </Center>
  );
};

export default ButtonComp;
