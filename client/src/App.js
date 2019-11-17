
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Search from './Search'

class App extends Component {
  render() {
    return (
      <Search />
    );
      }
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
}

function Registration() {
  return <h2>Registration</h2>;
}

function PropertyTax() {
  return <Jumbotron>
  <h1>Property Tax</h1>
  <p>
    This page is where you will search for Real Estate Based upon
    property tax
  </p>
  <p>
    <Button>Link</Button>
  </p>
</Jumbotron>;
  return <h2>PropertyTax</h2>;
}

function PropertyType() {
  return <Jumbotron>
  <h1>Property Type</h1>
  <p>
   This page is where you will search for Real Estate Based upon 
   property type.
  </p>
  <p>
    <Button>Link</Button>
  </p>
</Jumbotron>;
}

function Price() {
  return <Jumbotron>
  <h1>Property Prioce</h1>
  <p>
   This page is where you will search for Real Estate Based upon
   Property Price
  </p>
  <p>
    <Button>Learn more</Button>
  </p>
</Jumbotron>;
}

function BestBuy() {
  return <Jumbotron>
  <h1>Best Buy</h1>
  <p>
  This page is where you will search for Real Estate Based upon
  The best price
  </p>
  <p>
    <Button>Learn more</Button>
  </p>
</Jumbotron>;
}

function Bed() {
  return <Jumbotron>
  <h1>Bedrooms</h1>
  <p>
  This page is where you will search for Real Estate Based upon
  the number bedrooms
  </p>
  <p>
    <Button>Learn more</Button>
  </p>
</Jumbotron>;
}