import { useReducer } from "react";

type PayloadType = { email: string } | { password: string };

type FormActions =
  | { type: "HANDLE_CHANGE"; payload: PayloadType }
  | { type: "DELETE_DATA" };

const reducer = (state: any, action: FormActions): any => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const useFormData = (initialState: ILoginData) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};
