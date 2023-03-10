import React from "react";
import { useContext } from "react";
import ExperienceContext from "../contexts/ExperienceContext";

const ExperienceDisplay = () => {

    const experienceContext = useContext(ExperienceContext);
    const { addData, setAddData, showEditJob, setShowEditJob, 
        editJob, setEditJob,
        showEditYears, setShowEditYears, editYear, setEditYear,
        showEditPosition, setShowEditPosition, editPosition, setEditPosition,
        showEditDescription, setShowEditDescription, 
        editDescription, setEditDescription} = experienceContext;

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
                    </li> {showEditJob == element.key  && <span><button className="update-button edit" onClick={updateJobEdit} value={element.key}>Update</button></span>}



                    <li className="italic" onClick={clickYearHandler}  value={element.key}>{showEditYears == element.key  ? <input onChange={handleYearEdit} 
                    name="years"
                    value={editYear} 
                    placeholder="Years (from - to)" 
                    /> : element.years}</li> {showEditYears == element.key  && <span><button className="update-button edit" onClick={updateYearEdit} value={element.key}>Update</button></span>}


                    <li onClick={clickPositionHandler}  value={element.key}>{showEditPosition == element.key  ? <input onChange={handlePositionEdit} 
                    name="position"
                    value={editPosition} 
                    placeholder="Position" 
                    /> : element.position}</li> {showEditPosition == element.key  && <span><button className="update-button edit" onClick={updatePositionEdit} value={element.key}>Update</button></span>}


                    <li onClick={clickDescriptionHandler}  value={element.key}>{showEditDescription == element.key  ? <input onChange={handleDescriptionEdit} 
                    name="description"
                    value={editDescription} 
                    placeholder="Description" 
                    /> : element.description}</li> {showEditDescription == element.key  && <span><button className="update-button edit" onClick={updateDescriptionEdit} value={element.key}>Update</button></span>}


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
        <h2>Experience</h2>
        <div className="experience-list">{listItems}</div>
        </div>
    )
}

export default ExperienceDisplay;