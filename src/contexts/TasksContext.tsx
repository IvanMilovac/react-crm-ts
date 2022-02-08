import React, { createContext, useReducer, ReactNode } from "react";
import { fakeTasks } from "../fakeData";

type AppState = typeof initialState;
type Action = { type: "ADD_TASKS"; payload: ITask[] };

interface IProviderProps {
  children: ReactNode;
}

const storageData = localStorage.getItem("tasks");

const initialState = !!storageData ? JSON.parse(storageData) : fakeTasks;

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_TASKS":
      return [...action.payload];
    default:
      return state;
  }
};

const TasksContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function TasksContextProvider({ children }: IProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksContextProvider };
