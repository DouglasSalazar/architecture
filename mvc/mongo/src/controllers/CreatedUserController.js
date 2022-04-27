const User = require("../models/User");

const CreateUserController = (async (user, res) => {
    try{
        if(await User.findOne({email: user.email}))
            return res.status(400).send({error: "User already exists"})

        return await User.create(user);
    } catch (err) {
        console.log(err)
        return res.status(500).send({error: err});
    }
});

module.exports = CreateUserController;