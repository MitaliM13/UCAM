const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config(); 
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());


const CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/oauth2callback';

app.get('/authorize', (req, res) => {
  const authUrl = `https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=${CLIENT_ID}&scope=ZohoCRM.modules.ALL&redirect_uri=${REDIRECT_URI}&access_type=offline`;
  res.redirect(authUrl);
});

app.get('/oauth2callback', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Authorization code not found');
  }

  try {
    const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
      params: {
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
      },
    });

    const { access_token, refresh_token } = response.data;

    console.log('Access Token:', access_token);
    console.log('Refresh Token:', refresh_token);

    res.send('Authorization successful! Tokens are logged on the server.');
  } catch (error) {
    console.error('Error exchanging authorization code:', error.response.data);
    res.status(500).send('Failed to exchange authorization code');
  }
});

app.listen(3000, () => {
  console.log('Backend server running on http://localhost:3000');
});
