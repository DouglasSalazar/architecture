const mongoose = require("../database");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        uniqu: true,
        lowercase: true,
        require: true,
    },
    updated: {
        type: Date, 
        default: Date.now
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;