import React from 'react';

const SkillsContext = React.createContext();

const SkillsContextProvider = ({ children }) => { 

    const [addData, setAddData] = React.useState([]);
    
    const [showEditSkills, setShowEditSkills] = React.useState("");

    const [editSkills, setEditSkills] = React.useState("");

    return (
        <SkillsContext.Provider value={{addData, setAddData, 
        showEditSkills, setShowEditSkills, editSkills, setEditSkills}}>
            {children}
        </SkillsContext.Provider>

    )

}


export default SkillsContext
export { SkillsContextProvider };