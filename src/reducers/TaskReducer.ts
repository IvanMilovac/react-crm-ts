import { useReducer } from "react";

type PayloadType = { name: string; value: string };

type IActionTypes =
  | { type: "HANDLE_CHANGE"; payload: PayloadType }
  | { type: "RESET_FORM"; payload: ITask };

const reducer = (state: any, action: IActionTypes) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return { ...state, [action.payload.name]: action.payload.value };
    case "RESET_FORM":
      return action.payload;
    default:
      return state;
  }
};

export const useTasks = (initialState: ITask) => {
  const [taskState, taskDispatch] = useReducer(reducer, initialState);
  return [taskState, taskDispatch];
};
