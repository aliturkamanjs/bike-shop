import { ChakraComponent, Box, BoxProps } from "@chakra-ui/react";

type DivComponent = ChakraComponent<"div", {}>;


const Card = ((props: BoxProps) => (
    <Box p="4" bg="#F7FAFC" {...props} />
)) as DivComponent;

export default Card;
