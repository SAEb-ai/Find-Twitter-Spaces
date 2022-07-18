import React from "react";
import "./FilterTwitterSpaces.css";
import SearchTwitterSpaces from "../components/search/SearchTwitterSpaces";
import SearchResults from "../components/searchResults/SearchResults";

export default function FilterTwitterSpaces() {
  return (
    <>
      <SearchTwitterSpaces />
      <SearchResults />
    </>
  );
}
