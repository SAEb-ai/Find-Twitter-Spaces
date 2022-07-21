import React, { createContext, useReducer } from "react";
import "./App.css";
import FilterTwitterSpaces from "./pages/FilterTwitterSpaces";
import { initialTopic, reducer } from "./reducer/Reducer";

export const UserContext = createContext();

export default function App() {
  const [topic, setTopic] = useReducer(reducer, initialTopic);
  return (
    <div className="App">
      <UserContext.Provider value={{ topic, setTopic }}>
        <FilterTwitterSpaces />
      </UserContext.Provider>
    </div>
  );
}
