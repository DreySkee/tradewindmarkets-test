import types from './types.js';

const signUp = (data) => ({
  type: types.SIGN_UP,
  data    	
});

// Mock an api call for auth
const asyncSignUp = (data) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch(signUp(data));
        resolve(data);
      }, 500)
    });
  }
};

export default {
  signUp: asyncSignUp
}