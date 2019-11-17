import React from 'react';

function Jumbotron({ children }) {
    return (
      <div
        className="jumbotron d-flex align-items-center"
      >
      <div className="container text-center">
          {children}
      </div>
      </div>
    );
  }
  
  export default Jumbotron;