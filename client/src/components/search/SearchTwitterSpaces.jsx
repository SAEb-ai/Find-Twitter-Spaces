import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { UserContext } from "../../App";
import useStyles from "./SearchTwitterSpaces.style";

export default function SearchTwitterSpaces() {
  const classes = useStyles();
  const { setTopic } = useContext(UserContext);
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setTopic({ type: "SEARCH", payload: e.target.value });
    }
  };
  return (
    <>
      <div className={classes.search}>
        <div className={classes.header}>Find a Twitter Space</div>
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
