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
      <Route component={ StepOne } exact path="/wizard/step1" />
      <Route component={ StepTwo } exact path="/wizard/step2" />
      <Route component={ StepThree } exact path="/wizard/step3" />
      </div>
      </div>
    );
  }
};

export default Wizard;
