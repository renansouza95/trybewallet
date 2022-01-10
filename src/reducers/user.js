// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';
import { INITIAL_STATE } from './initialState';

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      user: {
        email: action.email,
        password: action.password,
      },
    };
  default:
    return state;
  }
};

export default userReducer;
