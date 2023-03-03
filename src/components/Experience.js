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

    const [showEditJob, setShowEditJob] = React.useState("");

    const [editJob, setEditJob] = React.useState("");

    const [showEditYears, setShowEditYears] = React.useState("");

    const [editYear, setEditYear] = React.useState("");

    const [showEditPosition, setShowEditPosition] = React.useState("");

    const [editPosition, setEditPosition] = React.useState("");

    const [showEditDescription, setShowEditDescription] = React.useState("");

    const [editDescription, setEditDescription] = React.useState("");

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

    const clickJobHandler = (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditJob(e.target.value);
        setEditJob("");
        }
        
	}


    const handleJobEdit = (e) => {
        setEditJob(e.target.value)
    }

    const updateJobEdit = (e) => {
        let key = e.target.value;
        if (editJob) {
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, jobName: editJob};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditJob("");
        setEditJob("");
      
    }

    const clickYearHandler = (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditYears(e.target.value);
        setEditYear("");
        }
	}


    const handleYearEdit = (e) => {
        setEditYear(e.target.value)
    }

    const updateYearEdit = (e) => {
        let key = e.target.value;
        if (editYear) {
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, years: editYear};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditYears("");
        setEditYear("");
      
    }


    const clickPositionHandler = (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditPosition(e.target.value);
        setEditPosition("");
        }
	}


    const handlePositionEdit = (e) => {
        setEditPosition(e.target.value)
    }

    const updatePositionEdit = (e) => {
        let key = e.target.value;
        if (editPosition) {
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, position: editPosition};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditPosition("");
        setEditPosition("");
      
    }


    const clickDescriptionHandler = (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditDescription(e.target.value);
        setEditDescription("");
        }
	}


    const handleDescriptionEdit = (e) => {
        setEditDescription(e.target.value)
    }

    const updateDescriptionEdit = (e) => {
        let key = e.target.value;
        if (editDescription) {
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, description: editDescription};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditDescription("");
        setEditDescription("");
      
    }





    const listItems = addData.map(
        (element) => {
            return (
                <ul key={element.key}>


                    <li onClick={clickJobHandler}  value={element.key}
                    style={{ 
                        fontWeight: 'bold'}}> {showEditJob == element.key  ? <input onChange={handleJobEdit} 
                        name="jobName"
                        value={editJob} 
                        placeholder="Job Name"/>:
                        element.jobName}
                    </li> {showEditJob == element.key  && <span><button onClick={updateJobEdit} value={element.key}>Update</button></span>}



                    <li onClick={clickYearHandler}  value={element.key}>{showEditYears == element.key  ? <input onChange={handleYearEdit} 
                    name="years"
                    value={editYear} 
                    placeholder="Years" 
                    /> : element.years}</li> {showEditYears == element.key  && <span><button onClick={updateYearEdit} value={element.key}>Update</button></span>}


                    <li onClick={clickPositionHandler}  value={element.key}>{showEditPosition == element.key  ? <input onChange={handlePositionEdit} 
                    name="position"
                    value={editPosition} 
                    placeholder="Position" 
                    /> : element.position}</li> {showEditPosition == element.key  && <span><button onClick={updatePositionEdit} value={element.key}>Update</button></span>}


                    <li onClick={clickDescriptionHandler}  value={element.key}>{showEditDescription == element.key  ? <input onChange={handleDescriptionEdit} 
                    name="description"
                    value={editDescription} 
                    placeholder="Description" 
                    /> : element.description}</li> {showEditDescription == element.key  && <span><button onClick={updateDescriptionEdit} value={element.key}>Update</button></span>}


                    <button onClick={() => {
                    setAddData(
                        addData.filter(a =>
                        a.key !== element.key
                        )
                    );
                    }}>Remove</button>
                </ul>
            )
        }
    )

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