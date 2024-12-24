import "../Form/Form.css";
import { useEffect } from "react";

function Form() {
  useEffect(() => {
    const validateEmail = () => {
      const form = document.forms["WebToLeads837049000000363001"];
      const emailFld = form.querySelectorAll("[ftype=email]");
      for (let i = 0; i < emailFld.length; i++) {
        const emailVal = emailFld[i].value.trim();
        if (emailVal.length !== 0) {
          const atpos = emailVal.indexOf("@");
          const dotpos = emailVal.lastIndexOf(".");
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert("Please enter a valid email address.");
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    };

    const checkMandatory = () => {
      const mndFields = ["Company", "Last Name"];
      const fldLangVal = ["First Name", "Last Name"];
      for (let i = 0; i < mndFields.length; i++) {
        const fieldObj = document.forms["WebToLeads837049000000363001"][mndFields[i]];
        if (fieldObj && fieldObj.value.trim().length === 0) {
          alert(`${fldLangVal[i]} cannot be empty.`);
          fieldObj.focus();
          return false;
        }
      }
      return validateEmail();
    };

    window.checkMandatory837049000000363001 = checkMandatory;
  }, []);

  return (
    <div className="form">
      <div className="form-container">
        <form
          id="webform837049000000363001"
          action="https://crm.zoho.in/crm/WebToLeadForm"
          name="WebToLeads837049000000363001"
          method="POST"
          onSubmit={() => {
            document.charset = "UTF-8";
            return window.checkMandatory837049000000363001();
          }}
          acceptCharset="UTF-8"
        >
          <input
            type="hidden"
            name="xnQsjsdp"
            value="664774aac32d9081c3cbc196e3eee174129b3caff72ea255adbd03f4fdcbab19"
          />
          <input
            type="hidden"
            name="xmIwtLD"
            value="3bf2251e19b830b2588662882ca020ba0fb19b2250448524fb7817ef2cc8acd28c56d4019ff2bfa55fdeaa6467ac06d8"
          />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input type="hidden" name="returnURL" value="https://www.zoho.com/en-in/crm/" />
          <div className="form-title">Register</div>
          <div className="form-row">
            <label htmlFor="Company" className="form-label">
              First Name <span className="required">*</span>
            </label>
            <input type="text" id="Company" name="Company" maxLength="200" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="Last_Name" className="form-label">
              Last Name <span className="required">*</span>
            </label>
            <input type="text" id="Last_Name" name="Last Name" maxLength="80" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input type="email" id="Email" name="Email" maxLength="100" className="form-input" />
          </div>
          <div className="form-row">
            <button type="submit" className="form-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
