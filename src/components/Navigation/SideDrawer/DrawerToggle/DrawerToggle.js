import React from 'react';
import './DrawerToggle.css';
var drawerToggle = function (props) { return (React.createElement("div", { className: "DrawerToggle", onClick: props.clicked },
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
export default drawerToggle;
