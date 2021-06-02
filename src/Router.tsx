import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Regular from "./pages/Regular";
import Hot from "./pages/Hot";
import Navigation from "./components/navigation";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Navigation>
          <Route exact path="/">
            <Redirect to="/regular" />
          </Route>
          <Route path="/regular" component={Regular} />
          <Route path="/hot" component={Hot} />
        </Navigation>
      </Switch>
    </BrowserRouter>
  );
}
