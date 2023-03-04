import React from "react";
import PersonalDetailsDisplay from "./PersonalDetailsDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import EducationDisplay from "./EducationDisplay";

const Resume = () => {
    return (
        <div className="resume">
            <PersonalDetailsDisplay/>
            <ExperienceDisplay/>
            <EducationDisplay />
        </div>
    )
}

export default Resume