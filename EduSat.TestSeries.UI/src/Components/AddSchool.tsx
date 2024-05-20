import React, { useState } from "react";
import { addSchool } from "../service/dataService";
import { ISchool } from "../Models/ISchool";
import { useNavigate } from "react-router-dom";

const AddSchool: React.FC = () => {
  const navigate = useNavigate();
  const [school, setSchool] = useState<ISchool>({
    id: "",
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    district: "",
    state: "",
    pin: "",
    email: "",
    staffId: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSchool({ ...school, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await addSchool(school);
    if (success) {
      alert("School added successfully");
      navigate("/dashboard/add-teachers");
    } else alert("Failed to add school");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add School</h2>
      <div>
        <label htmlFor="name">School Name</label>
        <input
          type="text"
          id="name"
          name="Name"
          value={school.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="addressLine1">Address line 1</label>
        <input
          type="text"
          id="addressLine1"
          name="AddressLine1"
          value={school.addressLine1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="addressLine2">Address line 2</label>
        <input
          type="text"
          id="addressLine2"
          name="AddressLine2"
          value={school.addressLine2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="City">City</label>
        <input
          type="text"
          id="City"
          name="City"
          value={school.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="district">District</label>
        <input
          type="text"
          id="district"
          name="District"
          value={school.district}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="State"
          value={school.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pincode">Pin Code</label>
        <input
          type="text"
          id="pincode"
          name="Pin"
          value={school.pin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="Email"
          value={school.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddSchool;
