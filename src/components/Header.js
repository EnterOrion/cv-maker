import React from "react";
import headerLogo from "../images/lapiz.png";

const Header = () => {
    return (
        <div className="header">
        <h1><span><img alt="" src={headerLogo}></img></span>Resume Builder</h1>
        </div>
    )
}

export default Header;