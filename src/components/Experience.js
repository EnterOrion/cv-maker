import React from "react";
import { useContext } from "react";
import ExperienceContext from "../contexts/ExperienceContext";

const ExperienceForm = () =>
{
  const experienceContext = useContext(ExperienceContext);
  const { addData, setAddData, setShowEditJob, setShowEditYears, 
      setShowEditPosition, setShowEditDescription} = experienceContext;


    const [formData, setFormData] = React.useState(
        {
            jobName: "",
            years: "",
            position: "",
            description: ""

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
                 jobName: formData.jobName,
                 years: formData.years,
                 position: formData.position, 
                 description: formData.description,
                 key: addData.length + 1 
 
            }]
        })

        setShowEditJob("");
        setShowEditYears("");
        setShowEditPosition("");
        setShowEditDescription("");

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                jobName: "",
                years: "",
                position: "",
                description: ""
            }
        })
    }



    return (
        <div>
        <form className="center-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Job Name"
                onChange={handleChange}
                name="jobName"
                value={formData.jobName}
            />
              <input
                type="text"
                placeholder="Years (from - to)"
                onChange={handleChange}
                name="years"
                value={formData.years}
            />
            <input
                type="text"
                placeholder="Position"
                onChange={handleChange}
                name="position"
                value={formData.position}
            />
            <input
                type="text"
                placeholder="Description"
                onChange={handleChange}
                name="description"
                value={formData.description}
            />
            <button className="update-button">Add</button>
        </form>
        </div>
    )
}

export default ExperienceForm