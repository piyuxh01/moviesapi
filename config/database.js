const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () =>{
    mongoose.connect(process.env.DATABASE_URL, )
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(err);
        console.log("Connection failed");
        process.exit(1);
    });
}
