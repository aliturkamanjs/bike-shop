import HomePage from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop";

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </Router>
  );
};

export default App;
