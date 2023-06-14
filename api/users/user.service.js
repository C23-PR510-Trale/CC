const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into user(nama,address,telp,email,password,bio)
            values(?,?,?,?,?,?)`,
            [
                data.nama,
                data.address,
                data.telp,
                data.email,
                data.password,
                data.bio
            ],
            (error, result, fields) => {
                if (error){
                    return callBack(error);
                }
                    return callBack(null, result);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select id,nama,address,telp,email,bio from user`,
            [],
            (error, result, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    getUserByUserId: (id,callBack) => {
        pool.query(
            `select id,nama,address,telp,email,bio from user where id = ?`,
            [id],
            (error, result, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, result[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `UPDATE user SET nama=?, address=?, telp=?, email=?, password=?, bio=? WHERE id=?`,
            [
                data.nama,
                data.address,
                data.telp,
                data.email,
                data.password,
                data.bio,
                data.id
            ],
            (error, result) => {
                if (error) {
                    callBack(error);
                } else {
                    callBack(null, result);
                }
            }
        );
    },
    deleteUser: (data,callBack)=>{
        pool.query(
            `delete from user where id = ?`,
            [data.id],
            (error, result, fields) => {
                if(error){
                  return  callBack(error);
                }
                return callBack(null, result[0]);
            }
        );
    },
    getUserByUserEmail: (email,callBack) => {
        pool.query(
            `select * from user where email = ?`,
            [email],
            (error, results, fields) =>{
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getData: callBack => {
        pool.query(
            `select id,trip_name,category,budget,rating,location from trip`,
            [],
            (error, result, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    getDataByTripId: (id,callBack) => {
        pool.query(
            `select id,trip_name,category,budget,rating,location from trip where id = ?`,
            [id],
            (error, result, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, result[0]);
            }
        );
    },
    getVolun: callBack => {
        pool.query(
            `select id,event_name,description,category,city,price,rating,pelaksanaan,regis from volun`,
            [],
            (error, result, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    getVolunByTripId: (id,callBack) => {
        pool.query(
            `select id,event_name,description,category,city,price,rating,pelaksanaan,regis from volun where id = ?`,
            [id],
            (error, result, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, result[0]);
            }
        );
    },
};
