import * as TYPES from "./ActionTypes";

export const setTableData = (data) => {
  return {
    type: TYPES.SET_TABLE_DATA,
    payload: data,
  };
};
