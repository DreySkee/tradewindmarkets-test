import types from './types.js';

const setUser = (data) => ({
  type: types.SET_USER,
  data    	
});

export default {
  setUser
}