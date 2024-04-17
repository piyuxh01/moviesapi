const express = require("express")
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
app.use(express.json());
require('./config/database').connect();
const movies = require('./routes/movies');
const user = require('./routes/Auth')
app.use('/api/v1',movies);
app.use('/api/v1',user);
app.listen(PORT,() =>{
    console.log(`App is running on port -> ${PORT}`)
})