import React from 'react';

const PersonalInfoContext = React.createContext();

const PersonalInfoContextProvider = ({ children }) => {

    const [addData, setAddData] = React.useState([]);
    
    const [showEditName, setShowEditName] = React.useState("");

    const [editName, setEditName] = React.useState("");

    const [showEditEmail, setShowEditEmail] = React.useState("");

    const [editEmail, setEditEmail] = React.useState("");

    const [showEditPhone, setShowEditPhone] = React.useState("");

    const [editPhone, setEditPhone] = React.useState("");

    const [showEditAddress, setShowEditAddress] = React.useState("");

    const [editAddress, setEditAddress] = React.useState("");


return (
    <PersonalInfoContext.Provider value={{
        addData, setAddData, showEditName, setShowEditName, editName, setEditName,
        showEditEmail, setShowEditEmail, editEmail, setEditEmail, 
        showEditPhone, setShowEditPhone, 
        editPhone, setEditPhone, 
        showEditAddress, setShowEditAddress,
        editAddress, setEditAddress
    }}>
        {children}
    </PersonalInfoContext.Provider>
)
}

export default PersonalInfoContext
export { PersonalInfoContextProvider };