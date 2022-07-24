import React, { createContext, useReducer } from "react";
import useStyles from "./App.style";
import FilterTwitterSpaces from "./pages/FilterTwitterSpaces";
import { initialTopic, reducer } from "./reducer/Reducer";

export const UserContext = createContext();

export default function App() {
  const classes = useStyles();
  const [topic, setTopic] = useReducer(reducer, initialTopic);
  return (
    <div className={classes.App}>
      <UserContext.Provider value={{ topic, setTopic }}>
        <FilterTwitterSpaces />
      </UserContext.Provider>
    </div>
  );
}
