import React from "react";
import ReactDOM from "react-dom";

import {
    initializeIcons
} from "office-ui-fabric-react";

import MyElement from "app-component";

const main = () => {
    initializeIcons();
    ReactDOM.render(<MyElement />, document.getElementById("root"));
};

main();
