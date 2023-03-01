import React from "react";

const ExperienceForm = () =>
{
    

    const [formData, setFormData] = React.useState(
        {
            jobName: "",
            years: "",
            position: "",
            description: ""

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
                 jobName: formData.jobName,
                 years: formData.years,
                 position: formData.position, 
                 description: formData.description,
                 key: addData.length + 1 
 
            }]
        })

        setInitialDisplay(true);

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

    const listItems = addData.map(
        (element) => {
            return (
                <ul>
                    <li style={{ 
                        fontWeight: 'bold', 
                        color: 'red' }}
                    >
                        {element.jobName}
                    </li>
                    <li>{element.years}</li>
                    <li>{element.position}</li>
                    <li>{element.description}</li>
                </ul>
            )
        }
    )

    return (
        <div>
        <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Job Name"
                onChange={handleChange}
                name="jobName"
                value={formData.jobName}
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
            <button>Add</button>
        </form>
        {initialDisplay && listItems}
        </div>
    )
}

export default ExperienceForm