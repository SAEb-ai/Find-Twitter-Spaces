import React, { useContext, useState, useEffect } from "react";

import axios from "axios";
import { UserContext } from "../../App";

export default function SearchResults() {
  const { topic } = useContext(UserContext);
  const [spaces, setSpaces] = useState([]);
  const getTwitterSpaces = async () => {
    if (topic != null) {
      const results = await axios.get(`/filter/${topic}`);
      setSpaces(results.data.data);
    }
  };
  useEffect(() => {
    getTwitterSpaces();
  }, [topic]);

  return (
    <>
      {spaces.map((space) => {
        return <div key={space.id}>{space.id}</div>;
      })}
    </>
  );
}
