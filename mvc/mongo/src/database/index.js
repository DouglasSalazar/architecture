const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true })
        .then(() =>
        console.log(`MongoDB Connected!`)
        )
        .catch(err => console.log(err));
                    
mongoose.Promise = global.Promise;

module.exports = mongoose;