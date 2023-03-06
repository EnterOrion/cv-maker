import React from "react";
import { useContext } from "react";
import SkillsContext from "../contexts/SkillsContext";


const SkillsDisplay = () => {

    const skillsContext = useContext(SkillsContext);
    const {addData, setAddData, showEditSkills,
     setShowEditSkills, editSkills, setEditSkills} = skillsContext;
  

    const clickSkillsHandler = (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditSkills(e.target.value);
        setEditSkills("");
        }
        
	}


    const handleSkillsEdit = (e) => {
        setEditSkills(e.target.value)
    }

    const updateSkillsEdit = (e) => {
        let key = e.target.value;
        if (editSkills) {
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, skill: editSkills};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditSkills("");
        setEditSkills("");
    }

    const listItems = addData.map(
        (element) => {
            return (
                <ul class="personal" key={element.key}>

                 <li onClick={clickSkillsHandler}  value={element.key}>
                     {showEditSkills == element.key  ? <input onChange={handleSkillsEdit} 
                        name="skill"
                        value={editSkills} 
                        placeholder="Skill"/>:
                        element.skill}
                </li> {showEditSkills == element.key  && <span><button onClick={updateSkillsEdit} value={element.key}>Update</button></span>}
                <button className="remove-button" onClick={() => {
                    setAddData(
                        addData.filter(a =>
                        a.key !== element.key
                        )
                    );
                    }}>Remove</button>

                </ul> )
                }
                )

        return (
            <div>
                <h2>Skills</h2>
                <div className="skills-list">{listItems}</div>
            </div>
        )
    }

export default SkillsDisplay;