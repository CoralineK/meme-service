import { BrowserRouter, Switch, Route } from "react-router-dom";
import Regular from "./pages/Regular";
import Hot from "./pages/Hot";
import Navigation from "./components/navigation";
import Home from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Navigation>
          <Route exact path="/" component={Home} />
          <Route path="/regular" component={Regular} />
          <Route path="/hot" component={Hot} />
        </Navigation>
      </Switch>
    </BrowserRouter>
  );
}
