import React from "react";

const EducationForm = () => {
    const [formData, setFormData] = React.useState(
        {
            school: "",
            years: "",
            degree: "",

        }
    )

    const [initialDisplay, setInitialDisplay] = React.useState(false)

    const [addData, setAddData] = React.useState([]);

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

        setInitialDisplay(true);

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                school: "",
                years: "",
                degree: ""
            }
        })
    }

    const listItems = addData.map(
        (element) => {
            return (
                <ul>
                    <li style={{ 
                        fontWeight: 'bold', 
                        color: 'red' }}
                    >
                        {element.school}
                    </li>
                    <li>{element.years}</li>
                    <li>{element.degree}</li>
                </ul>
            )
        }
    )



    return (
        <div>
        <form onSubmit={handleSubmit}>
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
        {initialDisplay && listItems}
        </div>

        )

}

export default EducationForm