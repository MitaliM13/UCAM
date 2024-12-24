import '../Form/Form.css';
import '../../App.css';

function Form() {
  return (
    <div className='form'>
      <div className="form-container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <form
        id="registration-form"
        action="https://crm.zoho.in/crm/WebToContactForm"
        name="WebToContacts837049000000341953"
        method="POST"
        onSubmit="javascript:document.charset='UTF-8'; return checkMandatory837049000000341953()"
        acceptCharset="UTF-8"
      >
        <h1 className="form-title">Registration Form</h1>
        <div className="form-row">
          <label htmlFor="First_Name" className="form-label">
            First Name:<span className="required">*</span>
          </label>
          <input type="text" id="First_Name" name="First Name" className="form-input" maxLength="40" required />
        </div>
        <div className="form-row">
          <label htmlFor="Last_Name" className="form-label">
            Last Name:<span className="required">*</span>
          </label>
          <input type="text" id="Last_Name" name="Last Name" className="form-input" maxLength="80" required />
        </div>
        <div className="form-row">
          <label htmlFor="Email" className="form-label">
            Email:<span className="required">*</span>
          </label>
          <input type="email" id="Email" name="Email" className="form-input" maxLength="100" required />
        </div>
        <div className="form-row">
          <label htmlFor="Phone" className="form-label">
            Phone:<span className="required">*</span>
          </label>
          <input type="text" id="Phone" name="Phone" className="form-input" maxLength="50" required />
        </div>
        <div className="form-row">
          <label htmlFor="Lead_Source" className="form-label">Program Name:</label>
          <select id="Lead_Source" name="Lead Source" className="form-select">
            <option value="-None-">-None-</option>
            <option value="Advertisement">Master</option>
            <option value="Cold Call">Preparatory Program</option>
          </select>
        </div>
        <div className="form-row">
          <input type="submit" className="form-button" value="Submit" />
        </div>
      </form>
    </div>
    </div>
  );
}

export default Form;
