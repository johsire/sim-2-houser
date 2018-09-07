
const initalState = { 
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    cancel: false,
};

const UPDATE_PROPERTY = "UPDATE_PROPERTY"
const UPDATE_CANCEL = "UPDATE_CANCEL"

export function updateProperty(name, address, city, state, zip) {
  return {
    type: UPDATE_PROPERTY,
    payload: name, address, city, state, zip
  }
};

export function updateCancel(cancel) {
  return {
    type: "CANCEL_BUTTON",
    payload: cancel
  }
};

function reducer(state = initalState, action) {
 switch (action.type) {
  case UPDATE_PROPERTY:
   return Object.assign({}, state, { property: action.payload });

   case UPDATE_CANCEL:
   return Object.assign({}, state, { "CANCEL_BUTTON": action.payload });

  default:
   return state;
  }
}; 

export default reducer;






















// export function updateAddress(address) {
//   return {
//     type: UPDATE_ADDRESS,
//     payload: address
//   }
// };

// export function updateCity(city) {
//   return {
//     type: UPDATE_CITY,
//     payload: city
//   }
// };

// export function updateState(state) {
//   return {
//     type: UPDATE_STATE,
//     payload: state
//   }
// };

// export function updateZip(zip) {
//   return {
//     type: UPDATE_ZIP,
//     payload: zip
//   }
// };



// case UPDATE_ADDRESS:
// return Object.assign({}, state, { address: action.payload });

// case UPDATE_CITY:
// return Object.assign({}, state, { city: action.payload });

// case UPDATE_STATE:
// return Object.assign({}, state, { state: action.payload });

// case UPDATE_ZIP:
// return Object.assign({}, state, { zip: action.payload });


// const UPDATE_NAME = 'UPDATE_NAME';
// const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
// const UPDATE_CITY = 'UPDATE_CITY';
// const UPDATE_STATE = 'UPDATE_STATE';
// const UPDATE_ZIP = 'UPDATE_ZIP';
