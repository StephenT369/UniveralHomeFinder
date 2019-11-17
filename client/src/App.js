
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Search from './Search'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import zillowLogo from "./Zillowlogo.gif";


export default function App() {
  return (
    <Router>
       <>

<div className="sidebar">
<a  id="sidebar-heading" href="blank.html">Information</a>

<br></br>
  <a  id="sidebar-menu" href="https://broadbandnow.com/Texas">Internet Providers</a>
  <br></br>
  <a id="sidebar-menu"  href="https://gisit.tarrantcounty.com/cmportal/">Crime</a>
  <br></br>
  <a id="sidebar-menu"  href="https://www.niche.com/k12/search/best-school-districts/m/dallas-fort-worth-metro-area/">School Districts</a>
  <br></br>
  
  
</div>

{/* <!-- Page content --> */}
{/* <div class="main">
  ...
</div>

      <div className="sidebar">
        <a className="active" href="client\src\Uhflogo.png">
          
        </a>

        <a href="https://gisit.tarrantcounty.com/cmportal/">
          Check Crime in your area.
        </a>

        <a className="intPro" href="https://broadbandnow.com/Texas">
          Search for Internet Provider.
        </a>
      </div> */}

      <div
        id="modalPassword"
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Forgot password</h3>
              <button
                type="button"
                className="close font-weight-light"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Reset your password..</p>
            </div>
            <div className="modal-footer">
              <button className="btn" data-dismiss="modal" aria-hidden="true">
                Close
              </button>
              <button className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bgimg display-container animate-opacity text-white">
        <h1>Universal Home Finder</h1>
        <div id="addQuestion">
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="Search"
                placeholder="Zip Code"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>

            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Price
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blankHtml.html">
                  $100K - $150K
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  $151K - $250K
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  $251K - $3500K
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  $351K - $450K
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  $451K - $550K
                </a>
                <div className="dropdown-divider"></div>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Property Tax
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blankHtml.html">
                  $500-1000
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                $1001-2000
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                $2001-3000
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                $3001-4000
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                $4001-5000
                </a>
                <div className="dropdown-divider"></div>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Property Type
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blankHtml.html">
                  Multi-Family
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Houses
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Condos/co-ops
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  Townhomes
                </a>
                
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="blankHtml.html">
                  Done
                </a>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Bed
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blankHtml.html">
                  1
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  2
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  3
                </a>
                <a className="dropdown-item" href="blankHtml.html">
                  4+
                </a>
               
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="blankHtml.html">
                  Done
                </a>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Best Buy
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blankHtml.html">
                  Action
                </a>
              
              </div>
            </div>
          </nav>
        </div>

        <div className="topleftimg">
          <img src={zillowLogo} alt="logo" />
        </div>
        <div className="signIn">
          <li className="dropdown order-1">
            <button
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              className="btn btn-outline-secondary dropdown-toggle"
            >
              Login <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right mt-2">
              <li className="px-3 py-2">
                <form className="form">
                  <div className="form-group">
                    <input
                      id="emailInput"
                      placeholder="Email"
                      className="form-control form-control-sm"
                      type="text"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="passwordInput"
                      placeholder="Password"
                      className="form-control form-control-sm"
                      type="text"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                  <div className="form-group text-center">
                    <small>
                      <a
                        href="blankHtml.html"
                        data-toggle="modal"
                        data-target="#modalPassword"
                      >
                        Forgot password?
                      </a>
                    </small>
                    <small>
                      <a className="regLink" href="client\src\Reg.js">
                        Register here!
                      </a>
                    </small>
                  </div>
                </form>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </>
  );
}

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
    </Router>
  );
}

function Home() {
  return null
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