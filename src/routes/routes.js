import BikeDetail from "../pages/bikeDetail";
import CartPage from "../pages/cartPage";
import HomePage from "../pages/home";
import ShopPage from "../pages/shop";

const routes = [
  { path: "/bike/:id?", component: BikeDetail },
  { path: "/shop", component: ShopPage },
  { path: "/cart", component: CartPage },
  { path: "/", component: HomePage, exact: true },
  { path: "", component: ShopPage },
];

export default routes;
