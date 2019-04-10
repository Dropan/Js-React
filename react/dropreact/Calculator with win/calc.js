import React from "react";
import ReactDOM from "react-dom";
import Parent from "./Parent";
import Tit from "./Tit";

const divCalc = document.createElement('divCalc');
const tit = document.createElement('tit');

window.onload = function () {
    document.body.appendChild(divCalc);
    document.head.appendChild(tit);
    ReactDOM.render(<Tit />, tit);
    ReactDOM.render(<Parent />, divCalc);
}