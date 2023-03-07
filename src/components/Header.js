import React from "react";
import headerLogo from "../images/lapiz.png";

const Header = () => {
    return (
        <header>
        <h1><span><img alt="" src={headerLogo}></img></span>Resume Builder</h1>
        </header>
    )
}

export default Header;