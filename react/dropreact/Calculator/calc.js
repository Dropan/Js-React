import React from "react";
import ReactDOM from "react-dom";
import Calculate from "./Calculate";

const divCalc = document.createElement('divCalc');

window.onload = function () {
    document.body.appendChild(divCalc);
    ReactDOM.render(<Calculate />, divCalc);
}