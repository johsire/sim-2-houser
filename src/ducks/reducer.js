const initalState = {
 name: '',
 address: '',
 city: '',
 state: '',
 zip: 0,
}


function reducer(state = initialState, action) {
 switch (action.type) {
  case ACTION_NAME:
   return Object.assign({}, state, {
 
   });
  default:
   return state;
 }
}; 

export default reducer;
