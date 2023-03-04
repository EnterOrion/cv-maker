import React from "react";
import { useContext } from "react";
import PersonalInfoContext from "../contexts/PersonalInfoContext";

const PersonalDetailsDisplay = () => {
    const personalDetailsContext = useContext(PersonalInfoContext);
    const {  addData, setAddData, showEditName, setShowEditName, editName, setEditName,
        showEditEmail, setShowEditEmail, editEmail, setEditEmail, 
        showEditPhone, setShowEditPhone, 
        editPhone, setEditPhone, 
        showEditAddress, setShowEditAddress,
        editAddress, setEditAddress} = personalDetailsContext;


    const clickNameHandler = (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditName(e.target.value);
        setEditName("");
        }
        
	}


    const handleNameEdit = (e) => {
        setEditName(e.target.value)
    }

    const updateNameEdit = (e) => {
        let key = e.target.value;
        if (editName) {
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, name: editName};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditName("");
        setEditName("");
      
    }

    const clickEmailHandler = (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditEmail(e.target.value);
        setEditEmail("");
        }
	}


    const handleEmailEdit = (e) => {
        setEditEmail(e.target.value)
    }

    const updateEmailEdit = (e) => {
        let key = e.target.value;
        if (editEmail) {
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, email: editEmail};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditEmail("");
        setEditEmail("");
      
    }

    const clickPhoneHandler = (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditPhone(e.target.value);
        setEditPhone("");
        }
	}


    const handlePhoneEdit = (e) => {
        setEditPhone(e.target.value)
    }

    const updatePhoneEdit = (e) => {
        let key = e.target.value;
        if (editPhone) {
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, phone: editPhone};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditPhone("");
        setEditPhone("");
      
    }

    const clickAddressHandler = (e) => {
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditAddress(e.target.value);
        setEditAddress("");
        }
	}


    const handleAddressEdit = (e) => {
        setEditAddress(e.target.value)
    }

    const updateAddressEdit = (e) => {
        let key = e.target.value;
        if (editAddress) {
        setAddData(
            addData.map((data) => {
              if (data.key == key) {
                return { ...data, address: editAddress};
              } else {
                return data;
              }
            })
          );
        }
        setShowEditAddress("");
        setEditAddress("");
      
    }



    const listItems = addData.map(
        (element) => {
            return (
                <ul key={element.key}>

                 <li onClick={clickNameHandler}  value={element.key}
                    style={{ 
                        fontWeight: 'bold'}}> {showEditName == element.key  ? <input onChange={handleNameEdit} 
                        name="name"
                        value={editName} 
                        placeholder="Name"/>:
                        element.name}
                </li> {showEditName == element.key  && <span><button onClick={updateNameEdit} value={element.key}>Update</button></span>}




                <li onClick={clickEmailHandler}  value={element.key}
                    style={{ 
                        fontWeight: 'bold'}}> {showEditEmail == element.key  ? <input onChange={handleEmailEdit} 
                        name="email"
                        value={editEmail} 
                        placeholder="Email"/>:
                        element.email}
                </li> {showEditEmail == element.key  && <span><button onClick={updateEmailEdit} value={element.key}>Update</button></span>}




                <li onClick={clickPhoneHandler}  value={element.key}>{showEditPhone == element.key  ? <input onChange={handlePhoneEdit} 
                    name="phone"
                    value={editPhone} 
                    placeholder="Phone number" 
                    /> : element.phone}</li> {showEditPhone == element.key  && <span><button onClick={updatePhoneEdit} value={element.key}>Update</button></span>}


                <li onClick={clickAddressHandler}  value={element.key}>{showEditAddress == element.key  ? <input onChange={handleAddressEdit} 
                    name="address"
                    value={editAddress} 
                    placeholder="Address" 
                    /> : element.address}</li> {showEditAddress == element.key  && <span><button onClick={updateAddressEdit} value={element.key}>Update</button></span>}



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
    <div>{listItems}</div>
   )


}

export default PersonalDetailsDisplay;