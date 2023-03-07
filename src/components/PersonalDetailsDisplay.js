import React from "react";
import { useContext } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
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
        console.log(e.target.value)
        console.log(e.target.placeholder)
        if (e.target.value > 0 && !e.target.placeholder) {
        setShowEditEmail(e.target.value);
        setEditEmail("");
        console.log("clicked");
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
        console.log("clicked");
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
        console.log("clicked");
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
                <ul class="personal" key={element.key}>

                 <li onClick={clickNameHandler}  value={element.key} className="name-personal"
                 > {showEditName == element.key  ? <input onChange={handleNameEdit} 
                        name="name"
                        value={editName} 
                        placeholder="Name"/>:
                        element.name}
                </li> {showEditName == element.key  && <span><button className="update-button edit" onClick={updateNameEdit} value={element.key}>Update</button></span>}



              
                <div class="lower-personal">
                  <li onClick={clickEmailHandler} value={element.key} className="email-personal"
                      > {showEditEmail == element.key  ? <input onChange={handleEmailEdit}
                          name="email"
                          value={editEmail}
                          placeholder="Email"/>:
                          element.email}
                  </li> {showEditEmail == element.key  && <span><button className="update-button edit" onClick={updateEmailEdit} value={element.key}>Update</button></span>}
                  <li onClick={clickPhoneHandler}  value={element.key} className="phone-personal"
                  >{showEditPhone == element.key  ? <input onChange={handlePhoneEdit}
                      name="phone"
                      value={editPhone}
                      placeholder="Phone number"
                      /> : element.phone}</li> {showEditPhone == element.key  && <span><button className="update-button edit" onClick={updatePhoneEdit} value={element.key}>Update</button></span>}
                  <li onClick={clickAddressHandler}  value={element.key} className="address-personal"
                  >{showEditAddress == element.key  ? <input onChange={handleAddressEdit}
                      name="address"
                      value={editAddress}
                      placeholder="Address"
                    /> : element.address}</li> {showEditAddress == element.key  && <span><button className="update-button edit" onClick={updateAddressEdit} value={element.key}>Update</button></span>}
                </div>



                    <button className="remove-button-personal" onClick={() => {
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
     { listItems.length == 0 && <h2 className="h2-name">Your Name Here</h2> }
    <div className="personal-list">{listItems}</div>
    </div>
   )


}

export default PersonalDetailsDisplay;