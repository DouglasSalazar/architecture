const express = require("express");
const CreatedUserController = require("./controllers/CreatedUserController");
const UpdateUserController = require("./controllers/UpdatedUserController");
const ListUserController = require("./controllers/ListUserController");
const DeletedUserController = require("./controllers/DeletedUserController");

const routers = express.Router();

//Example REST

routers.post("/create", async (req, res) => {
    try{
        const user = {  name: req.body.name, 
                        description : req.body.name,
                        lastName: req.body.lastName,
                        email: req.body.email};                        
        const createdUser = await CreatedUserController(user, res);

        return res.status(201).send({createdUser});
    }catch (err) {
        return res.status(400).send({err});
    }
});

routers.put("/update", async (req, res) => {
    try{
        const user = {  _id: req.body._id,
                        name: req.body.name, 
                        description : req.body.name,
                        lastName: req.body.lastName,
                        email: req.body.email};                        
        const updatedUser = await UpdateUserController(user, res);

        return res.status(200).send({updatedUser});
    }catch (err) {
        return res.status(400).send({err});
    }
});

routers.get("/list", async (req, res) => {
    try{                   
        const listUsers = await ListUserController();

        return res.status(200).send({listUsers});
    }catch (err) {
        return res.status(400).send({err});
    }
});

routers.delete("/delete/:id", async (req, res) => {
    try{
        const userId = req.params.id;                        
        await DeletedUserController({_id: userId}, res);
        
        return res.status(204).send({});
    }catch (err) {
        return res.status(400).send({err});
    }
});

//Example EJS

routers.get("/page/list", async (req, res) => {
    try{
        const listUsers = await ListUserController();

        res.render('views/list',{ data: listUsers});
    }catch (err) {
        return res.status(400).send({err});
    }
});

routers.get("/page/delete/:id", async (req, res) => {
    try{
        const userId = req.params.id;                        
        await DeletedUserController({_id: userId}, res);
        
        const listUsers = await ListUserController();

        return res.render('views/list',{ data: listUsers});
    }catch (err) {
        return res.status(400).send({err});
    }
});

routers.get("/page/create", async (req, res) => {
    try{
        res.render('views/create');
    }catch (err) {
        return res.status(400).send({err});
    }
});

routers.post("/page/create", async (req, res) => {
    try{
        console.log(req.body)
        const user = {
            name: req.body.name, 
            description : req.body.name,
            lastName: req.body.lastName,
            email: req.body.email};                        
        await CreatedUserController(user, res);
        const listUsers = await ListUserController();

        return res.render('views/list',{ data: listUsers});
    }catch (err) {
        return res.status(400).send({err});
    }
});



module.exports = { routers };