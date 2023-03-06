import React from "react";
import { useContext } from "react";
import EducationContext from "../contexts/EducationContext";


const EducationDisplay = () => {

    const educationContext = useContext(EducationContext);
    const {addData, setAddData, showEditSchool, setEditSchool, setShowEditSchool, editSchool,
      showEditYears, setShowEditYears, editYear, setEditYear, showEditDegree, setShowEditDegree,
      editDegree, setEditDegree} = educationContext;

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
                    
                    
                    <li className="italic" onClick={clickYearHandler}  value={element.key}>{showEditYears == element.key  ? <input onChange={handleYearEdit} 
                    name="years"
                    value={editYear} 
                    placeholder="Years (from - to)" 
                    /> : element.years}</li> {showEditYears == element.key  && <span><button onClick={updateYearEdit} value={element.key}>Update</button></span>}


                    <li onClick={clickDegreeHandler}  value={element.key}>{showEditDegree == element.key  ? <input onChange={handleDegreeEdit} 
                        name="degree"
                        value={editDegree} 
                        placeholder="Degree"/>:
                        element.degree}</li> {showEditDegree == element.key  && <span><button onClick={updateDegreeEdit} value={element.key}>Update</button></span>}
                    
                    <button className="remove-button" onClick={() => {
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
      <h2>Education</h2>
    <div className="education-list">{listItems}</div>
    </div>
   )


}

export default EducationDisplay;