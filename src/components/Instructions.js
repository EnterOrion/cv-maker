import React from "react";
import arrowIcon from "../images/flecha.png";

const Instructions = () => {
    return (
        <div className="welcome-text">
            <h1>Looking for an effortless way to design an resume?</h1>
            <h3><img alt="" src={arrowIcon}></img>  Welcome to <span class="blue-text">your personal resume builder.</span> </h3>
            <p className="welcome-para">  <strong>Fill out each section</strong> and then click the button next to it to add the section to your resume. 
               You can also <strong>click on text</strong> on the resume itself if you want to edit any individual pieces of information and then <strong>click "update"</strong> when you're done. You can also delete sections entirely. <br/>
               When you're finished, press <strong>ctrl + p</strong> to print!

            </p>
        </div>
    )

}

export default Instructions