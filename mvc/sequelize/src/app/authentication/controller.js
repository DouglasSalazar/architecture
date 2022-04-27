const express = require('express');
const Authenticate = require('../components/autentication/Authentication');
const router = express.Router();
//const authMiddleware = require('../middeware/auth')

router.post('/register', async (req, res) =>{
    try{
        let authenticate = new Authenticate();
        await authenticate.registerUser(req.body);        
        return res.send({success : 'Cadastro realizado com sucesso.'});
    }catch (err){
        return res.status(401).send({error : 'Registration failed.'})
    }
});

router.post('/authenticate', async (req, res) =>{
    try{
        console.log(req.body);
        let authenticate = new Authenticate();
        return res.send(await authenticate.validateLogin(req.body));
    }catch (err){
        return res.status(401).send({error : 'Authentication failed.'})
    }
});

router.post('/reset', async (req, res) =>{
    try{
        let authenticate = new Authenticate();
        return res.send(authenticate.resetPassword(req.body));
    }catch (err){
        return res.status(401).send({error : 'Failed to reset password.'})
    }
});

//router.use(authMiddleware);
router.post('/logof', (req, res) =>{
    try{
        return res.send({success : 'teste3'});
    }catch (err){
        return res.status(401).send({error : 'logof failed.'})
    }
});

module.exports = app => app.use('/', router);