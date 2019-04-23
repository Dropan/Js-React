import React from "react";
import ReactDOM from "react-dom";
import BullsAndCows from "./BullsAndCows";
//import SearchWords from "./SearchWords";
//import ListWords from "./ListWords";

const BAC = document.createElement('BullsAndCows');
//const SearchW = document.createElement('SearchWords');
//const ListW = document.createElement('ListWords');

window.onload = function () {
    document.body.appendChild(BAC);
    //document.body.appendChild(SearchW);
    //document.body.appendChild(ListW);
    ReactDOM.render(<BullsAndCows />, BAC);
    //ReactDOM.render(<SearchWords />, SearchW);
    //ReactDOM.render(<ListWords />, ListW);
}