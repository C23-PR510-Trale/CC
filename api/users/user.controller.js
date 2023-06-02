const { 
    create, 
    getUsers, 
    getUserByUserId, 
    updateUser, 
    deleteUser,
    getUserByUserEmail
} = require("./user.service");
const pool = require("../../config/database");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const validator = require('validator');


module.exports={
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        console.log(salt);
        console.log(body.password);
        console.log(body);

        // Validasi email
        if (!validator.isEmail(body.email)) {
            return res.status(400).json({
                success: 0,
                message: "Invalid email format"
            });
        }

        // Tambahkan validasi email yang tidak sama
         pool.query(`SELECT * FROM user WHERE LOWER(email) = LOWER(${pool.escape(req.body.email)});`, (err, result) => {
            // email sudah terdaftar
            if (result.length) {
                return res.status(409).send({
                    msg: "Akun ini sudah ada!",
                });
            } 

            body.password = hashSync(body.password, salt);
            create(body, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: 0,
                        message: "Database connection error"
                    });
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            });
        });
    },

    getUserByUserId: (req, res)=>{
        const id = req.params.id;
        getUserByUserId(id, (err,results)=>{

            if (err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getUsers: (req, res)=>{
        getUsers((err,results)=>{
            if (err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateUser: (req, res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err,results)=>{
            if (err){
                console.log(err);
                return;
            }if(!results){
                return res.json({
                    success: 0,
                    message: "Failed to Update User"
                });
            }
            return res.json({
                success: 1,
                message: "Update Successfully"
            });
        });
    },
    deleteUser: (req, res)=>{
        const data = req.body;
        deleteUser(data, (err,results)=>{
            if (err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                message: "User Deleted Successfully"
            });
        });
    },
    login: (req,res)=>{
        const body = req.body;
        getUserByUserEmail(body.email, (err,results)=>{
            if(err){
                console.log(err);
            }if(!results){
                return req.json({
                    success:0,
                    data:"Invalid email or password"
                });
            }
            const result = compareSync(body.password, results.password);
            if (result){
                results.password = undefined;
                const jsonwebtoken = sign({result:results}, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success:1,
                    message: "Login Successfully",
                    data: results,
                    token: jsonwebtoken
                });
            }else{
                return req.json({
                    success:0,
                    data:"Invalid email or password"
                });
            }
        });

    },
};