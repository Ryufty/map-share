const initSignInState = {
  status: false
}

export const signInStatusReducer = (state = initSignInState.status, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      return action.status;
    default:
      return state;
  }
};