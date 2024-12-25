import '../ApiForm/Apiform.css';
import { useState } from 'react';

function Apiform() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State for tracking form submission
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const [successMessage, setSuccessMessage] = useState(''); // State for success messages

  const handleZohoAuth = () => {
    window.location.href = 'http://localhost:3000/authorize'; // Backend endpoint for authorization
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const { firstName, lastName, email, phone } = formData;
    if (!firstName || !lastName || !email || !phone) {
      setErrorMessage('All fields marked with * are required.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!/^\d+$/.test(phone)) {
      setErrorMessage('Phone number should contain only digits.');
      return false;
    }
    setErrorMessage(''); // Clear previous errors
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error messages
    setSuccessMessage(''); // Clear any previous success messages

    if (!validateForm()) return; // Stop submission if validation fails

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          programName: '',
        }); // Reset form
      } else {
        setErrorMessage(data.message || 'Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Something went wrong! Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <form id="registration-form" onSubmit={handleSubmit} acceptCharset="UTF-8">
          <h1 className="form-title">Registration Form</h1>

          {errorMessage && <p className="form-error">{errorMessage}</p>} {/* Display error messages */}
          {successMessage && <p className="form-success">{successMessage}</p>} {/* Display success messages */}

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
              maxLength="15"
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
              <option value="">-None-</option>
              <option value="Master">Master</option>
              <option value="Preparatory Program">Preparatory Program</option>
            </select>
          </div>

          <div className="form-row">
            <button
              type="submit"
              className="form-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        <button onClick={handleZohoAuth} className="zoho-auth-button">
          Connect to Zoho CRM
        </button>
      </div>
    </div>
  );
}

export default Apiform;
