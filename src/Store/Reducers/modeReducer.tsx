import { ActionType } from "../actionType";
type ActionProps = {
  type: string;
  payload: string;
};

const initialState = 0;

const modeReducer = (state: number = initialState, action: ActionProps) => {
  switch (action.type) {
    case ActionType.NOTES:
      return state + action.payload;
    default:
      return state;
  }
};

export default modeReducer;
