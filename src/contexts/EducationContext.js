import React from 'react';

const EducationContext = React.createContext();

const EducationContextProvider = ({ children }) => {

    const [addData, setAddData] = React.useState([]);

    const [showEditSchool, setShowEditSchool] = React.useState(""); 
    const [editSchool, setEditSchool] = React.useState(""); 

    const [showEditYears, setShowEditYears] = React.useState("");  
    const [editYear, setEditYear] = React.useState(""); 

    const [showEditDegree, setShowEditDegree] = React.useState(""); 
    const [editDegree, setEditDegree] = React.useState(""); 

    return (
        <EducationContext.Provider value={{
            addData, setAddData, showEditSchool, setEditSchool, setShowEditSchool, editSchool,
            showEditYears, setShowEditYears, editYear, setEditYear, showEditDegree, setShowEditDegree,
            editDegree, setEditDegree
        }}>
            {children}
        </EducationContext.Provider>
    )

}

export default EducationContext;
export { EducationContextProvider };

