import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StepThree extends Component {
 render() {
  return (
     <div className="button">
       <Link to="/">
         <button>Complete</button>
       </Link>
     </div>
  )
 }
}

export default StepThree;
