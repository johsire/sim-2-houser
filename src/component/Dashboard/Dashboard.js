import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    axios.get('/api/house')
      .then((res) => {
      this.setState({ houses: res.data.house })
    }),
    axios.delete('/api/house')
      .then((res) => {
        this.setState ({ houses: res.data.house })
      })
  }



  render() {
    return (
      <div>
        <h2>Dashboard</h2>
          <House />
          <div className="button">
            <Link to="/wizard">
              <button >Add New Property </button>
            </Link>
          </div>
      </div>
    );
  }
};

export default Dashboard;
