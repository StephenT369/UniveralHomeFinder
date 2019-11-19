import React, {useState} from "react";
import "./Search.css";
import zillowLogo from "./Zillowlogo.gif";
import {Link} from 'react-router-dom';


function Search() {
  const [zipCode, setZipCode] = useState(0)
  const [price, setPrice] = useState('');
  

  function handleZipcode(event) {
    setZipCode(event.target.value);
  }

  function handlePropetyTax() {
    // API.get('/search?params...')
  }

  function handlePrice(event) {
    const price = event.target.innerText
    setPrice(price)

   // API.get(`/search?price=${price}&zipCode=${zipCode}`)

  }

  return (
    // <!-- sidebar -->
    <>

<div className="sidebar">
<a  id="sidebar-heading" href="blank.html">Information</a>

<br></br>
  <a target="_blank" id="sidebar-menu" href="https://broadbandnow.com/Texas">Internet Providers</a>
  <br></br>
  <a target="_blank" id="sidebar-menu"  href="https://gisit.tarrantcounty.com/cmportal/">Crime</a>
  <br></br>
  <a target="_blank" id="sidebar-menu"  href="https://www.niche.com/k12/search/best-school-districts/m/dallas-fort-worth-metro-area/">School Districts</a>
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
                onChange={handleZipcode}
                id="searchZipCode"
              />
            </form>

            <div className="btn-group">
              <button
                // type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Price
              </button>
              <div className="dropdown-menu">

                <Link className="dropdown-item" to="/Price" onClick={handlePrice}>
                  $100K - $150K
                </Link>
                <Link className="dropdown-item" to="/Price">
                  $151K - $250K
                </Link>
                <Link className="dropdown-item" to="/Price">
                  $251K - $3500K
                </Link>
                <Link className="dropdown-item" to="/Price">
                  $351K - $450K
                </Link>
                <Link className="dropdown-item" to="/Price">
                  $451K - $550K
                </Link>
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
                <Link className="dropdown-item" to="/PropertyTax?minTaxAmt=500&maxTaxAmt=1000">
                  $500-1000
                </Link>
                <Link className="dropdown-item" to="/PropertyTax?minTaxAmt=1001&maxTaxAmt=2000">
                $1001-2000
                </Link>
                <Link className="dropdown-item" to="/PropertyTax?minTaxAmt=2001&maxTaxAmt=3000">
                $2001-3000
                </Link>
                <Link className="dropdown-item" to="/PropertyTax?minTaxAmt=3001&maxTaxAmt=4000">
                $3001-4000
                </Link>
                <Link className="dropdown-item" to="/PropertyTax?minTaxAmt=4001&maxTaxAmt=5000">
                $4001-5000
                </Link>
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
                Bed
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/Bed">
                  1
                </Link>
                <Link className="dropdown-item" to="/Bed">
                  2
                </Link>
                <Link className="dropdown-item" to="/Bed">
                  3
                </Link>
                <Link className="dropdown-item" to="/Bed">
                  4+
                </Link>
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

export default Search;
