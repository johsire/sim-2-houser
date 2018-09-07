import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
// import axios from 'axios';

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
      export (
        <Switch>
          <Route component={ StepOne } path="/wizard/step1" />
          <Route component={ StepTwo } path="/wizard/step2" />
          <Route component={ StepThree } path="/wizard/step3" />
        </Switch>
      )
      </div>
      </div>
    );
  }
};

export default Wizard;
