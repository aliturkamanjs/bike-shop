import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";

const App = (): JSX.Element => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
