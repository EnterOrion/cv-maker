import React from "react";
import arrowIcon from "../images/flecha.png";

const Instructions = () => {
    return (
        <div className="welcome-text">
            <h1>Looking for an effortless way to design an resume?</h1>
            <h3><img alt="" src={arrowIcon}></img>  Welcome to <span class="blue-text">your personal resume builder.</span> </h3>
            <p className="welcome-para">  Fill out each section and then click the button to add it to your resume below. 
                If you want to edit any information, just click the text on the resume that you want to change and click "update" when you're done. You can also delete sections entirely.
            </p>
        </div>
    )

}

export default Instructions