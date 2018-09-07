import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { Route } from 'react-router-dom';

import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';

class Wizard extends Component { 

  render() {
    return (
      <div>
        <h3>Wizard</h3>
          <div className="button">
            <Link to="/">
              <button>Cancel</button>
            </Link>
      </div>
      </div>
    );
  }
};

export default Wizard;
