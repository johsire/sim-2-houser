import React from 'react';
import { Link } from 'react-router-dom';

function House (props) {
  return (
    <div>
      <h3>Home Listings</h3>
      <br />
      <div className="button">
        {/* <Link to="/"> */}
          <button>Delete Property</button>
        {/* </Link> */}
          <br />
          <br />
          </div>
    </div>
  );
};

export default House;


      {/* if (houses.length > 0) {
      return (<House houses={houses} />)
    } else {
      return (<h1>Houses Loading...</h1>)
    } */}

