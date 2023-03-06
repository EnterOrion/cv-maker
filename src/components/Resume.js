import React from "react";
import PersonalDetailsDisplay from "./PersonalDetailsDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import EducationDisplay from "./EducationDisplay";
import SkillsDisplay from "./SkillsDisplay";

const Resume = () => {
    return (
        <div className="resume">
            <PersonalDetailsDisplay/>
            <ExperienceDisplay/>
            <SkillsDisplay />
            <EducationDisplay />
        </div>
    )
}

export default Resume