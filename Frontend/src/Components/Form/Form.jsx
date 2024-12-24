import { useState } from 'react';
import '../Form/Form.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    course: '',
    status: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }

    if (!formData.program) {
      newErrors.program = 'Please select a program.';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course.';
    }

    if (!formData.status) {
      newErrors.status = 'Please select your status.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the consent checkbox.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully', formData);
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: '',
        course: '',
        status: '',
        consent: false,
      });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">
        Are you ready to take the next step toward your future career?
      </h1>
      <h4 className="form-subheading">
        At UCAM Mumbai Campus, we don’t just educate – we shape the leaders of tomorrow.
      </h4>

      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </label>

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            Phone Number:
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </label>

          <label>
            Program Name:
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
            >
              <option value="">Select Program</option>
              <option value="Master">Master</option>
              <option value="Preparatory Program">Preparatory Program</option>
            </select>
            {errors.program && <span className="error">{errors.program}</span>}
          </label>

          <label>
            Course Name:
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="Course A">Course A</option>
              <option value="Course B">Course B</option>
            </select>
            {errors.course && <span className="error">{errors.course}</span>}
          </label>

          <label>
            Status:
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Enquiry">Enquiry</option>
              <option value="Application">Application</option>
            </select>
            {errors.status && <span className="error">{errors.status}</span>}
          </label>

          <div className="consent">
            <input
              type="checkbox"
              id="consent-checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label htmlFor="consent-checkbox">
              I authorize UCAM Mumbai and its representatives to contact me with updates and notifications via Email, SMS, WhatsApp, or call. This will override DND/NDNC and privacy policy.
            </label>
            {errors.consent && <span className="error">{errors.consent}</span>}
          </div>

          <button className="form-button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
