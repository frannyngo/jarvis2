type ActionProps = {
  type: string;
  payload: string;
};

const initialState = 0;

const modeReducer = (state: number = initialState, action: ActionProps) => {
  switch (action.type) {
    case "notes":
      return state + action.payload;
    default:
      return state;
  }
};

export default modeReducer;
