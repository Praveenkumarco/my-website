const express = require('express');
const requestIp = require('request-ip');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(requestIp.mw());

app.post('/log', async (req, res) => {
  const ipAddress = req.clientIp;
  const userAgent = req.get('user-agent');

  // Get location information using ipstack API
  try {
    const response = await axios.get(`http://api.ipstack.com/${ipAddress}?access_key=e206d6ea542db2f410ec54b2d8bca383`);
    const location = `${response.data.city}, ${response.data.region_name}, ${response.data.country_name}`;

    // Log the details (you might want to store it in a database)
    console.log(`IP: ${ipAddress}, Location: ${location}, User-Agent: ${userAgent}`);
    
    // Respond to the client
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
