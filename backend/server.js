const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send({ name: 'hi' });
	// return res.status(400).send({
	// 	message: 'This is an error!'
	// });
});

app.post('/', (req, res) => {
	const data = req.body;
	console.log('button working');
});

app.listen(3000);
