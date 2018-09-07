import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateProperty } from '../../ducks/reducer' 

class StepOne extends Component {
 constructor() {
  super();

  this.state={
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
  }
};

componentDidMount() {
 axios.get('/api/house')
   .then((res) => {
   this.setState({ houses: res.data.house })
 })
}

handleChange = (e) => {
  updateProperty({
   [e.target.name]: e.target.value
 });
};

handleSubmit = (e) => {
 e.preventDefault();
 const data = {
   name: this.state.name,
   address: this.state.address,
   city: this.state.city,
   state: this.state.state,
   zip: this.state.zip
 };
 
 //  console.log('api/house');
}; 

 render() {
  return (
   <div>
   <h3>Wizard</h3>

   Name: {this.state.name} <br/>
   Address: {this.state.address} <br/>
   City: {this.state.city}
   State: {this.state.state}
   Zip: {this.state.zip} <br/><br/>

 <form onSubmit={e => this.handleSubmit(e)}>  
    
   <div className="inputBox">
     <br/>
     <input name="name" type='text' placeholder='Property Name' 
     value={this.state.name} onChange={e => this.handleChange(e)} 
     />
     <br/>
     <br/>
     <input name="address" type='text' placeholder='Address' value={this.state.address} onChange={e => this.handleChange(e)}/>
     <br/>
     <br/>
     <input name="city" type='text' placeholder='City' value={this.state.city} onChange={e => this.handleChange(e)} />
     <input name="state" type='text' placeholder='State' value={this.state.state} onChange={e => this.handleChange(e)} />
     <input name="zip" type='number' placeholder='Zip' value={this.state.zip} onChange={e => this.handleChange(e)} />
   </div>
 </form>        
 </div>
  )}
};

function mapStateToProps(state){
  const { property } = state;

  return {
    property
  };
};

export default connect(mapStateToProps, { updateProperty })(StepOne);
