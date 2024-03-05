const initialState = false;

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_LOGIN":
      return action.status;
    default:
      return state;
  }
};

export default loginReducer;
