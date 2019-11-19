
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Search from './Search'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import zillowLogo from "./Zillowlogo.gif";
import queryString from 'query-string';


export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/Price">
            <Price />
          </Route>
          <Route exact path="/PropertyTax" component={PropertyTax} />
          <Route path="/Bed">
            <Bed />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return (
    <Search />
  )
}

function Registration() {
  return <h2>Registration</h2>;
}

function PropertyTax(props) {
  console.log(queryString.parse(props.location.search))
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