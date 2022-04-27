const User = require("../models/User");

const UpdateUserController = (async (user, res) => {
    try{
        if(!await User.findOne({_id: user._id}))
            return res.status(400).send({error: "User does not exist"})

        return await User.updateOne({_id: user._id}, user);
    } catch (err) {
        return res.status(500).send({error: err});
    }
});

module.exports = UpdateUserController;