import React from "react";
import ReactDOM from "react-dom";
import HeaderVocabulary from "./HeaderVocabulary";
import SearchWords from "./SearchWords";
//import ListWords from "./ListWords";

const HeaderV = document.createElement('HeaderVocabulary');
const SearchW = document.createElement('SearchWords');
//const ListW = document.createElement('ListWords');

window.onload = function () {
    document.body.appendChild(HeaderV);
    document.body.appendChild(SearchW);
    //document.body.appendChild(ListW);
    ReactDOM.render(<HeaderVocabulary />, HeaderV);
    ReactDOM.render(<SearchWords />, SearchW);
    //ReactDOM.render(<ListWords />, ListW);
}