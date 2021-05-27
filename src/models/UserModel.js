const db = require('../db');
module.exports = {
    getAllUsers: ()=>{
        return new Promise((accepted, rejected)=>{
            db.query('SELECT * FROM users', (error, results)=>{
                if(error){rejected(error); return;}
                accepted(results);
            });
        });
    },

    setUser: (cell, name)=>{
        return new Promise((accepted, rejected)=>{
            db.query('SELECT * FROM users WHERE cell = ?', [cell], (error, results)=>{
                if(error){rejected(error); return;}
                if(results.length > 0) {
                    accepted(results = {error: false});
                }else {
                    db.query('INSERT INTO users (cell, name) values (?, ?)', 
                    [cell, name], (error, results)=>{
                        if(error){rejected(error); return;}
                        accepted(results = {id: results.insertId});
                    });
                }
            });
        });
    },

};