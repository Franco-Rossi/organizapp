const express = require('express');
const morgan = require('morgan');
const app = express();

// SETTINGS
app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

// ROUTES

// STATIC FILES

// SERVER START
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
