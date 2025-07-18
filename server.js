const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/api/fun-fact', async (req, res) => {
    try {
      const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
      const factText = response.data.text;
  
      res.json({ fact: factText });
    } catch (error) {
      console.error('Error fetching fun fact:', error.message);
      res.status(500).json({ error: 'Could not fetch fun fact' });
    }
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
