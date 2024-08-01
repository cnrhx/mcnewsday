const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/proxy/:url', async (req, res) => {
  try {
    const { url } = req.params;
    const response = await axios.get(url, { timeout: 5000 });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
