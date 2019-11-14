import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Registration">Registration</Link>
            </li>
            <li>
              <Link to="/price">Price</Link>
            </li>
            <li>
              <Link to ="/PropertyTax">PropertyTax</Link>
            </li>
            <li>
              <Link to ="/PropertyType">PropertyType</Link>
            </li>
            <li>
              <Link to ="/BestBuy">BestBuy</Link>
            </li>
            <li>
              <Link to ="/Bed">Bed</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/Price">
            <Price />
          </Route>
          <Route path="/PropertyTax">
            <PropertyTax /> 
          </Route>
          <Route path="/PropertyType">
            <PropertyType />
          </Route>
          <Route path="/BestBuy">
            <BestBuy />
          </Route>
          <Route path="/Bed">
            <Bed />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Registration() {
  return <h2>Registration</h2>;
}

function PropertyTax() {
  return <h2>PropertyTax</h2>;
}

function PropertyType() {
  return <h2>PropertyType</h2>;
}

function Price() {
  return <h2>Price</h2>;
}

function BestBuy() {
  return <h2>BestBuy</h2>;
}

function Bed() {
  return <h2>Bed</h2>;
}

