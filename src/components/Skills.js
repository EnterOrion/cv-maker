import React from "react";
import { useContext } from "react";
import SkillsContext from "../contexts/SkillsContext";

const SkillsForm = () => {

    const skillsContext = useContext(SkillsContext);
  const { addData, setAddData, setShowEditSkills} = skillsContext;

    const [formData, setFormData] = React.useState(
        {
            skill: ""

        }
    )


    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
       
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setAddData(prevThingsArray => {
            return [...prevThingsArray, {
                 skill: formData.skill,
                 key: addData.length + 1 
 
            }]
        })

        setShowEditSkills("");

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                skill: ""
            }
        })
    }


    return (
        <div>
        <form className="center-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Skill"
                onChange={handleChange}
                name="skill"
                value={formData.skill}
            />
                <button className="update-button">Add</button>
        </form>
        </div>
            )

    
}

export default SkillsForm