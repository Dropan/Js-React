import React from "react";
import ReactDOM from "react-dom";
import Parent from "./Parent";

const divCalc = document.createElement('divCalc');

window.onload = function () {
    document.body.appendChild(divCalc);
    ReactDOM.render(<Parent />, divCalc);
}