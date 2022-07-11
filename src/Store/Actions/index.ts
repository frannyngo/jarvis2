import { ActionType } from "../actionType";
import { Dispatch } from "redux";

export const changeMode = (mode: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.NOTES,
    });
  };
};
