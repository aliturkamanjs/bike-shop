import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./providers/cartProvider";
import routes from "./routes/routes";

const App = (): JSX.Element => {
  return (
    <Router>
      <CartProvider>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={index}
              />
            );
          })}
        </Switch>
      </CartProvider>
    </Router>
  );
};

export default App;
