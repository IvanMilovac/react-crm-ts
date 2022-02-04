import { useReducer } from "react";

type PayloadType = { name: string; value: string };

type IActionTypes = { type: "HANDLE_CHANGE"; payload: PayloadType };

const reducer = (state: any, action: IActionTypes) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};

export const useTasks = (initialState: ITask) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};
