


import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    mobileNumber: '',
    frontIdPhoto: null,
    backIdPhoto: null,
    address: '',
    gender: '',
    ssn: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      dateOfBirth: '',
      mobileNumber: '',
      frontIdPhoto: null,
      backIdPhoto: null,
      address: '',
      gender: '',
      ssn: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Mobile Number:
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Front ID Photo:
        <input
          type="file"
          name="frontIdPhoto"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
      <br />
      <label>
        Back ID Photo:
        <input
          type="file"
          name="backIdPhoto"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
      <br />
      <label>
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="">-- Select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        SSN:
        <input
          type="text"
          name="ssn"
          value={formData.ssn}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
