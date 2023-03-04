import React from "react";
import { useContext } from "react";
import EducationContext from "../contexts/EducationContext";

const EducationForm = () => {
    const educationContext = useContext(EducationContext);
    const {addData, setAddData, setShowEditSchool,
        setShowEditYears, setShowEditDegree} = educationContext;

    const [formData, setFormData] = React.useState(
        {
            school: "",
            years: "",
            degree: "",

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
                 school: formData.school,
                 years: formData.years,
                 degree: formData.degree,
                 key: addData.length + 1 
 
            }]
        })

        setShowEditSchool("");
        setShowEditYears("");
        setShowEditDegree("");

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                school: "",
                years: "",
                degree: ""
            }
        })
    }

  



    return (
        <div>
        <form className="center-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name of School"
                onChange={handleChange}
                name="school"
                value={formData.school}
            />
              <input
                type="text"
                placeholder="Years"
                onChange={handleChange}
                name="years"
                value={formData.years}
            />
            <input
                type="text"
                placeholder="Degree"
                onChange={handleChange}
                name="degree"
                value={formData.degree}
            />
            <button>Add</button>
        </form>
        </div>

        )

}

export default EducationForm