import React, { createContext, useReducer } from "react";
import "./App.css";
import FilterTwitterSpaces from "./pages/FilterTwitterSpaces";
import { initialState, reducer } from "./reducer/Reducer";

export const UserContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <FilterTwitterSpaces />
      </UserContext.Provider>
    </div>
  );
}
