import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./HelloMessage";
import StringList from "./StringList";

const div = document.createElement("div");

window.onload = function()
{
    document.body.appendChild(div);
    ReactDOM.render(<StringList items={["qwerty", "uiop"]} />, div);
}
