import Header from "../components/header/header";
import HomeBody from "../components/homebody/homebody";
import Layout from "../layout/layout";

const HomePage = (): JSX.Element => {
  
  return (
    <Layout>
      <Header />
      <HomeBody />
    </Layout>
  );
};

export default HomePage;
