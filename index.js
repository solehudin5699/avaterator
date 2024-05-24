// @ts-nocheck
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const svgGenerator = require('./helper/svgGenerator');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

//GET AVATAR
app.get('/', async (req, res) => {
  const { name, size, background, color, bold, shape, round } = req.query;
  const response = svgGenerator(`${name}`, {
    size,
    background,
    color,
    bold,
    shape,
    round,
  });
  try {
    res.setHeader('Pragma', 'public');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Max-Age', 1814400);
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Accept, X-Requested-With, remember-me'
    );
    res.setHeader('Cache-Control', 'max-age=1814400');
    res.setHeader('content-type', 'image/svg+xml');
    res.send(new Buffer.from(response));
  } catch (error) {
    res.setHeader('Content-type', 'application/json');
    res.status(500).send({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
