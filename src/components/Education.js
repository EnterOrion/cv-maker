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

    const [showEditYears, setShowEditYears] = React.useState("");

    const [editYear, setEditYear] = React.useState("")

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
    
    const clickHandler = (e) => {
        if (e.target.value > 0) {
        setShowEditYears(e.target.value);
        }
	}


    const handleEdit = (e) => {
        setEditYear(e.target.value)
    }

    const updateEdit = (e) => {
        let key = e.target.value;
        
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, years: editYear};
              } else {
                return data;
              }
            })
          );
        setShowEditYears("");
        setEditYear("");
      
    }


    const listItems = addData.map(
        (element) => {
            return (
                
                <ul key={element.key}>
                    <li style={{ 
                        fontWeight: 'bold', 
                        color: 'red' }}
                        
                    >
                        {element.school}
                    </li>
                    <li onClick={clickHandler}  value={element.key}>{showEditYears == element.key  ? <input onChange={handleEdit} 
                    name="years"
                    value={editYear}  
                    /> : element.years}</li> {showEditYears== element.key  && <span><button onClick={updateEdit} value={element.key}></button></span>}
                    <li>{element.degree}</li>
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