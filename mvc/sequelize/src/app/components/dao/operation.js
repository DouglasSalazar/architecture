const { Op } = require("sequelize");

class OperationDatabase{

    constructor(name) {
        this.models = require('../../models/' + name);
    }

    async create(parameters) {
        try{
            const record = await this.standardFields(parameters.record, parameters.username, true);
            await this.models.create(record);
            return {success : 'Realizado com sucesso.'};
        }catch(err){
            console.log(err);
            return {error : 'Auth04: Failed to register.'};
        }
    }

    async find(parameter, isOr){
        try{
            return await this.models.findOne({ where: { [((isOr) ? Op.or : Op.and)]: parameter } });
        }catch(err){
            console.log(err);
            return {error : 'Auth05: Failed to perform query.'};
        }
    }

    async update(parameter, conditional, isOr){
        try{
            return await this.models.update(parameter, { where: { [((isOr) ? Op.or : Op.and)]: conditional } });
        }catch(err){
            console.log(err);
            return {error : 'Auth06: Failed to perform update.'};
        }
    }


    standardFields(json, username, isCreate){
        json.date_update  = new Date();
        json.username_update  = username;

        if (isCreate)   {
            json.date_creation  = new Date();
            json.username_create  = username;
        }

        return json;
    }

}

module.exports = OperationDatabase;