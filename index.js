const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.post('/events', (req, res) => {

    const event = req.body;

    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);

    res.send({ status: 'OK' });
});

app.listen(4005, () => console.log('Server running on port 4005'));
