const UserModel = require('../models/UserModel');

module.exports = {
    getAllUsers: async(req, res)=>{
        let json = {error:'', results:[]};

        let users = await UserModel.getAllUsers();
        for(let i in users) {
            json.results.push({
                id: users[i].id,
                cell: users[i].cell,
                name: users[i].name
            });
        }
        res.json(json);
    },

    setUser: async(req, res)=>{
        let json = {};

        let cell = req.body.cell;
        let name = req.body.name;

        if(cell && name) {
            let response = await UserModel.setUser(cell, name);
            json = response;
        }else {
            json = {error: 'Campos não preenchidos'};
        }
        res.json(json);
    },

};