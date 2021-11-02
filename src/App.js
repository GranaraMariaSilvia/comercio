import Topbar from "./components/Topbar";
import Home from "../src/components/pages/Home";
import ProducList from "./components/pages/ProducList";
import Product from "./components/pages/Product";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const user = true;

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProducList />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/carts">
            <Cart />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
