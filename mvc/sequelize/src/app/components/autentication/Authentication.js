const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const Email = require('../../components/email/email');
const OperationDatabase = require('../dao/operation');

class Authenticate {
    async token (id){
        return await jwt.sign({ id : id }, authConfig.secret,{
            expiresIn: 3600,
        });
    }

    async compare (parameter, hashDatabase) {
        return await Bcrypt.compareSync(parameter, hashDatabase);
    }

    async generate (parameter) {
        return await Bcrypt.hash(parameter, 10);
    }

    async validateLogin(userLogin) {
        try{
            let operationDao = new OperationDatabase('Users');
            var conditional = [{ username: userLogin.login }, { email: userLogin.login}];
            const user = await operationDao.find(conditional, true);
            if(user != null) {
                if(await this.compare(userLogin.password, user.dataValues.password_user)) {    
                    user.dataValues.password_user = undefined;
                    return { userData : user.dataValues, token : await this.token(user.dataValues.user_id) };                         
                }
            }

            return {error : 'Login ou senha inválido.'};

        }catch (err){
            return {error : 'Auth01: Falha ao realizar login.'};
        }
    }

    async registerUser(parameter){
        try{
            let operationDao = new OperationDatabase('Users');
            var conditional = [{ username: parameter.record.username }, { email: parameter.record.email}];
            const user = await operationDao.find(conditional, true);
            if (user == null) {      
                parameter.record.password_user = await this.generate(parameter.record.password_user);
                return await operationDao.create(parameter);
            }else {
                return {error : 'Email ou username já cadastrado'};
            }
        }catch(err){
            console.log(err);
            return {error : 'Auth02: Falha ao realizar Cadastro.'};
        }
    }
    
    async resetPassword(parameter){
        try{
            let operationDao = new OperationDatabase('Users');
            var conditional = [{ username: parameter.login }, { email: parameter.login}];
            const user = await operationDao.find(conditional, true);
            if (user != null) {
                var newPassword = Math.floor(Math.random() * 100000000);    
                operationDao.update({password_user : await this.generate(newPassword.toString())} , {email : parameter.login,  username : parameter.login}, true);                   
                let email = new Email(user.email, "Reset de senha", "Nova senha: " + newPassword);
                return email.sendEmail();
            }
            return  {error : 'Usuário ou email inválido.'}
        } catch (err) {
            console.log(err);
            return  {error : 'Auth03: Falha ao resetar a senha.'}
        }
    }
}

module.exports = Authenticate;