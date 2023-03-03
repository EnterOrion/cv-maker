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

    const [showEditSchool, setShowEditSchool] = React.useState("");

    const [editSchool, setEditSchool] = React.useState("");

    const [showEditYears, setShowEditYears] = React.useState("");

    const [editYear, setEditYear] = React.useState("");

    const [showEditDegree, setShowEditDegree] = React.useState("");

    const [editDegree, setEditDegree] = React.useState("");

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

    const clickSchoolHandler= (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditSchool(e.target.value);
        setEditSchool("");
        }
	}

    const handleSchoolEdit = (e) => {
        setEditSchool(e.target.value)
    }

    const updateSchoolEdit = (e) => {
        let key = e.target.value;
        if (editSchool) {
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, school: editSchool};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditSchool("");
        setEditSchool("");
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


    const clickDegreeHandler = (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
            setShowEditDegree(e.target.value);
            setEditDegree("");
        }
    }

    const handleDegreeEdit = (e) => {
        setEditDegree(e.target.value)
    }

    const updateDegreeEdit = (e) => {
        let key = e.target.value;
        if (editDegree) {
        
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, degree: editDegree};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditDegree("");
        setEditDegree("");
      
    }



    const listItems = addData.map(
        (element) => {
            return (
                
                <ul key={element.key}>
                    <li onClick={clickSchoolHandler}  value={element.key}
                    style={{ 
                        fontWeight: 'bold'}}> {showEditSchool == element.key  ? <input onChange={handleSchoolEdit} 
                        name="school"
                        value={editSchool} 
                        placeholder="Name of School"/>:
                        element.school}
                    </li> {showEditSchool == element.key  && <span><button onClick={updateSchoolEdit} value={element.key}>Update</button></span>}
                    
                    
                    <li onClick={clickYearHandler}  value={element.key}>{showEditYears == element.key  ? <input onChange={handleYearEdit} 
                    name="years"
                    value={editYear} 
                    placeholder="Years" 
                    /> : element.years}</li> {showEditYears == element.key  && <span><button onClick={updateYearEdit} value={element.key}>Update</button></span>}


                    <li onClick={clickDegreeHandler}  value={element.key}>{showEditDegree == element.key  ? <input onChange={handleDegreeEdit} 
                        name="degree"
                        value={editDegree} 
                        placeholder="Degree"/>:
                        element.degree}</li> {showEditDegree == element.key  && <span><button onClick={updateDegreeEdit} value={element.key}>Update</button></span>}
                    
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