import BikeDetail from "../pages/bikeDetail";
import HomePage from "../pages/home";
import ShopPage from "../pages/shop";

const routes = [
  { path: "/bike/:id?", component: BikeDetail },
  { path: "/shop", component: ShopPage },
  { path: "/", component: HomePage, exact: true },
];

export default routes;
