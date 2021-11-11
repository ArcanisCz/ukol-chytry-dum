import React from "react";
import { render } from 'react-dom';
import '../../style.css';

const Header = (props) => {
    return (
    <>
        <header class="header">
            <h1 class="header__title">{props.title}</h1>
        </header>
    </>
    );
}

export default Header;