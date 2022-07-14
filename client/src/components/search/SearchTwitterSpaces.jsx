import React from "react";
import { TextField } from "@mui/material";
import { useStyles } from "./SearchTwitterSpaces.style.js";

export default function SearchTwitterSpaces() {
  const classes = useStyles();
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
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
