import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./SearchTwitterSpaces.css";

export default function SearchTwitterSpaces() {
  const [topic, setTopic] = useState("");
  const handleInputs = (e) => {
    let searchTopic = e.target.value;
    setTopic(searchTopic);
  };

  return (
    <>
      <div className="search">
        <TextField
          label="Find Twitter Spaces"
          variant="outlined"
          onChange={handleInputs}
          inputProps={{
            style: {
              width: "35vw",
            },
          }}
        />
      </div>
    </>
  );
}
