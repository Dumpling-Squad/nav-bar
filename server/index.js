const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router');

const app = express();
const port = 3006;


app.use('/nav', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan('dev'));
app.use(cors());
// app.use('/', express.static(path.join(__dirname, '')))

app.listen(port, () => console.log(`nav bar listening at http://localhost:${port}`));