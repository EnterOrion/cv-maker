import React from "react";
import { useContext } from "react";
import PersonalInfoContext from "../contexts/PersonalInfoContext";

const PersonalDetailsForm = () => {
    const personalDetailsContext = useContext(PersonalInfoContext);
    const {  addData, setAddData, setShowEditName, setShowEditEmail, 
        setShowEditPhone, setShowEditAddress,} = personalDetailsContext;


    const [formData, setFormData] = React.useState(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
        }
    ) 


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
 
       setShowEditName("");
       setShowEditEmail("");
       setShowEditPhone("");
       setShowEditAddress("");
    }


 

    return (
        <div>
        <form className="center-form top-form" onSubmit={handleSubmit}>
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
            <button className="update-button">Update</button>
        </form>
    
    
        </div>
    )
}

export default PersonalDetailsForm