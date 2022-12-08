export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";

// Action Creators
export const login = (payload) => ({ type: LOGIN, payload });
export const logout = (payload) => ({ type: LOGOUT, payload });

const INITIAL_STATE = {
  nickname: "",
  isLoggedIn: false,
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      // return alert(action.payload.nickname);
      return {
        nickname: action.payload.nickname,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    case SIGNUP:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}
