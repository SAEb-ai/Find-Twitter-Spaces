import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { UserContext } from "../../App";
import useStyles from "./SearchTwitterSpaces.style";

export default function SearchTwitterSpaces() {
  const { dispatch } = useContext(UserContext);
  const classes = useStyles();
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "SEARCH", payload: e.target.value });
    }
  };
  return (
    <>
      <div className={classes.search}>
        <TextField
          label="Find Twitter Spaces"
          variant="outlined"
          onKeyPress={handleSubmit}
          InputLabelProps={{ className: classes.labelSize }}
          InputProps={{ className: classes.searchBoxSize }}
        />
      </div>
    </>
  );
}
