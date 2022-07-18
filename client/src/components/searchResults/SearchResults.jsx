import React, { useContext } from "react";

import axios from "axios";
import { UserContext } from "../../App";

export default function SearchResults() {
  const { state } = useContext(UserContext);
  if (state) {
    axios
      .get(`/filter/${state}`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((result) => {
        console.log(result);
      });
  }
  return <></>;
}
