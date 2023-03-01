import React from "react";

const PersonalDetailsForm = () => {
    const PersonalDetailsDisplay = (props) => {
        return (
            <div>
                <ul>
                    <li>{props.name}</li>
                    <li>{props.email}</li>
                    <li>{props.phone}</li>
                    <li>{props.address}</li>
                </ul>
            </div>
        )
    }

    const [formData, setFormData] = React.useState(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
        }
    ) 

    const [submitFormData, setSubmitForm] = React.useState(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
            display: false
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
        setSubmitForm(prevFormData => {
            return {
                ...prevFormData,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                display: true
            }
        })
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                name: "",
                email: "",
                phone: "",
                address: ""
            }
        })
       
    }

 

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
        {submitFormData.display && <PersonalDetailsDisplay 
                name={submitFormData.name}
                email={submitFormData.email}
                phone={submitFormData.phone}
                address={submitFormData.address}
            />}
    
    
        </div>
    )
}

export default PersonalDetailsForm