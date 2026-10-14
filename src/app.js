const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

// compress the file in the request/response
app.use(compression());

app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));

// allow to send url encoded in body
// extended also nested objects
app.use(express.urlencoded({ extended: true }));

// allow to send json in body
app.use(express.json());

app.use(favicon(`${__dirname}/../client/img/favicon.png`));

router(app);

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on port ${port}`);
});