import React from "react";

const ExperienceContext = React.createContext();


const ExperienceContextProvider = ({ children }) => {

const [addData, setAddData] = React.useState([]);

const [showEditJob, setShowEditJob] = React.useState("");

const [editJob, setEditJob] = React.useState("");

const [showEditYears, setShowEditYears] = React.useState("");

const [editYear, setEditYear] = React.useState("");

const [showEditPosition, setShowEditPosition] = React.useState("");

const [editPosition, setEditPosition] = React.useState("");

const [showEditDescription, setShowEditDescription] = React.useState("");

const [editDescription, setEditDescription] = React.useState("");

return (
    <ExperienceContext.Provider value={{
        addData, setAddData, showEditJob, setShowEditJob, 
        editJob, setEditJob,
        showEditYears, setShowEditYears, editYear, setEditYear,
        showEditPosition, setShowEditPosition, editPosition, setEditPosition,
        showEditDescription, setShowEditDescription, 
        editDescription, setEditDescription
    }}>
        {children}
    </ExperienceContext.Provider>
)
}

export default ExperienceContext
export { ExperienceContextProvider };