
const createStore = require('redux').createStore;

const reducer = require('./reducer');

const store = createStore(reducer);

export default store;
