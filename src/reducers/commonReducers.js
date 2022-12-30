import * as TYPES from "../actions/ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      return {
        loggedin: action.payload,
      };
    case TYPES.LOGOUT_SUCCESS:
      return {
        loggedin: !action.payload,
      };
    case TYPES.SET_TABLE_DATA:
      return {
        ...state,
        tableData: action.payload,
      };
    default:
      return state;
  }
};
