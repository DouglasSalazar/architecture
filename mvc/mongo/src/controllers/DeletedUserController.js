const User = require("../models/User");

const DeletedUserController = (async (userId, res) => {
    try{
        if(!await User.findOne(userId))
            return res.status(400).send({error: "User does not exist"})

        return await User.deleteOne(userId);
    } catch (err) {
        console.log(err)
        return res.status(500).send({error: err});
    }
});

module.exports = DeletedUserController;