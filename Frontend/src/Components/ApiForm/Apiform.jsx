import '../ApiForm/Apiform.css'
import { useState } from 'react'

function Apiform() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programName: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit-form', { // Updated URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert(data.message || 'Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <form id="registration-form" onSubmit={handleSubmit} acceptCharset="UTF-8">
          <h1 className="form-title">Registration Form</h1>
          <div className="form-row">
            <label htmlFor="First_Name" className="form-label">
              First Name:<span className="required">*</span>
            </label>
            <input
              type="text"
              id="First_Name"
              name="firstName"
              className="form-input"
              maxLength="40"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="Last_Name" className="form-label">
              Last Name:<span className="required">*</span>
            </label>
            <input
              type="text"
              id="Last_Name"
              name="lastName"
              className="form-input"
              maxLength="80"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="Email" className="form-label">
              Email:<span className="required">*</span>
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              className="form-input"
              maxLength="100"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="Phone" className="form-label">
              Phone:<span className="required">*</span>
            </label>
            <input
              type="text"
              id="Phone"
              name="phone"
              className="form-input"
              maxLength="50"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="Lead_Source" className="form-label">
              Program Name:
            </label>
            <select
              id="Lead_Source"
              name="programName"
              className="form-select"
              value={formData.programName}
              onChange={handleChange}
            >
              <option value="-None-">-None-</option>
              <option value="Advertisement">Master</option>
              <option value="Cold Call">Preparatory Program</option>
            </select>
          </div>
          <div className="form-row">
            <input
              type="submit"
              className="form-button"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Apiform;
