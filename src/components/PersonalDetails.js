import React from "react";

const PersonalDetailsForm = () => {

    const [formData, setFormData] = React.useState(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
        }
    ) 

    const [addData, setAddData] = React.useState([]);

    const [initialDisplay, setInitialDisplay] = React.useState(false);

    const [showEditName, setShowEditName] = React.useState("");

    const [editName, setEditName] = React.useState("");

    const [showEditEmail, setShowEditEmail] = React.useState("");

    const [editEmail, setEditEmail] = React.useState("");

    const [showEditPhone, setShowEditPhone] = React.useState("");

    const [editPhone, setEditPhone] = React.useState("");

    const [showEditAddress, setShowEditAddress] = React.useState("");

    const [editAddress, setEditAddress] = React.useState("");

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
        setAddData( [{
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                key: addData.length + 1 
            }]
        )
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                name: "",
                email: "",
                phone: "",
                address: ""
            }
        })
       setInitialDisplay(true)
       setShowEditName("");
       setShowEditEmail("");
       setShowEditPhone("");
       setShowEditAddress("");
    }

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
        <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                value={formData.name}
            />
             <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
             <input
                type="text"
                placeholder="Phone Number"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
            />
             <input
                type="text"
                placeholder="Address"
                onChange={handleChange}
                name="address"
                value={formData.address}
            />
            <button>Update</button>
        </form>
        {initialDisplay && listItems}
    
    
        </div>
    )
}

export default PersonalDetailsForm