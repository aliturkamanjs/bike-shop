import { Container } from "@chakra-ui/layout";
import FooterComp from "../components/footer/footer";
import NavigationComp from "../components/navigation/navigation";

const Layout = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  return (
    <Container maxW="1919px" p="0" minH="100vh" bg="#F3F3F3">
      <NavigationComp />
      {children}
      <FooterComp />
    </Container>
  );
};

export default Layout;
