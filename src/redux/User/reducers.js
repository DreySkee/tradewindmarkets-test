import types from './types.js';

const userReducer = (state=null, action) => {
  switch(action.type) {
    case types.SET_USER: {
      const { data } = action;
      return { ...data };
    }
    
    default: return state;
  }
}

export default userReducer;