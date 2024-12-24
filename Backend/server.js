require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
  const { firstName, lastName, email, phone, programName } = req.body;

  if (!firstName || !lastName || !email || !phone) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  try {
    const leadData = {
      data: [
        {
          First_Name: firstName,
          Last_Name: lastName,
          Email: email,
          Phone: phone,
          Lead_Source: programName || 'None',
        },
      ],
    };

    const response = await axios.post(process.env.ZOHO_API_URL, leadData, {
      headers: {
        'Authorization': `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
      },
    });

    if (response.status === 200) {
      res.json({ message: 'Form submitted successfully', data: response.data });
    } else {
      res.status(500).json({ message: 'Error submitting form to Zoho CRM.' });
    }
  } catch (error) {
    console.error('Error submitting form:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error submitting form to Zoho CRM.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
