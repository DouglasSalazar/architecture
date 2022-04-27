const User = require("../models/User");

const ListUserController = (async (res) => {
    try{
        return await User.find({});
    } catch (err) {
        console.log(err)
        return res.status(500).send({error: err});
    }
});

module.exports = ListUserController;