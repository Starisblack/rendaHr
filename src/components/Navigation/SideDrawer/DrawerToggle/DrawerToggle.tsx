import React, { FC } from 'react';
import './DrawerToggle.css';

type drawerToggleProps ={
    clicked?: () => void
}

const drawerToggle:FC<drawerToggleProps> = (props) => (
    <div className="DrawerToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;