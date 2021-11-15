import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/authActions';

const initialState = { isAuthenticated: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return { ...state };
  }
};
