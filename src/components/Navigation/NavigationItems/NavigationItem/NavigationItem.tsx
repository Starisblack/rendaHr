
import { Link } from 'react-router-dom';
import './NavigationItem.css';
import React, { FC } from "react";


type NavigationItemProps = {
    link?: any
    children: React.ReactNode
    class?: string
    clicked?: () => void
}

const navigationItem:FC<NavigationItemProps> = ( props ) => (
    <li className="NavigationItem">
        <Link 
         onClick={props.clicked}
         className={props.class}
         to={props.link}
        >{props.children}
        </Link> 
    </li>
);

export default navigationItem;