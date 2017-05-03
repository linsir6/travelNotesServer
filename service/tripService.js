/**
 * Created on 2017/2/13.后台的服务类
 *
 */
var fs = require('fs');
var mysql = require('mysql');
exports.register = function (phone, pwd, name) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();

    var promise = new Promise(function (resolve, reject) {

        var userSelectSql = "SELECT pwd FROM user WHERE phone='" + phone + "'";
        connection.query(userSelectSql, function (err, result) {
            if (result[0] != null) {
                resolve('101');
            }
        });
        var userAddSql = 'INSERT INTO user(phone,pwd,name) VALUES(?,?,?)';
        var userAddSql_Params = [phone, pwd, name];
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {

            } else {
                resolve('100');
            }
        });
    });

    return promise.then(function (value) {
        return value;
    }, function (value) {

    });
    return promise;
};


exports.load = function (phone, pwd) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();
    var promise = new Promise(function (resolve, reject) {
        var userSelectSql = "SELECT name FROM user WHERE phone='" + phone + "' AND pwd='" + pwd + "'";

        connection.query(userSelectSql, function (err, result) {
            console.log(result[0].name);
            if (result[0] != null) {
                resolve('100,' + result[0].name);
            }
            else {
                resolve('102');
            }
        });
    });

    return promise.then(function (value) {
        return value;

    }, function (value) {

    });
    return promise;
};


exports.all_travel_notes = function () {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();
    var promise = new Promise(function (resolve, reject) {
        var userSelectSql = "SELECT * FROM travel_notes";

        connection.query(userSelectSql, function (err, result) {
            if (result[0] != null) {
                resolve(result);
            }
            else {
                resolve('102');
            }
        });
    });

    return promise.then(function (value) {
        return value;

    }, function (value) {

    });
    return promise;
};


exports.all_raiders = function () {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();
    var promise = new Promise(function (resolve, reject) {
        var userSelectSql = "SELECT * FROM raiders";

        connection.query(userSelectSql, function (err, result) {
            if (result[0] != null) {
                resolve(result);
            }
            else {
                resolve('102');
            }
        });
    });

    return promise.then(function (value) {
        return value;

    }, function (value) {

    });
    return promise;
};

exports.search_travel_notes = function (place) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();
    var promise = new Promise(function (resolve, reject) {
        var userSelectSql = "SELECT * FROM travel_notes WHERE title LIKE '%" + place + "%'";
        connection.query(userSelectSql, function (err, result) {
            if (result[0] != null) {
                resolve(result);
            }
            else {
                resolve('102');
            }
        });
    });

    return promise.then(function (value) {
        return value;

    }, function (value) {

    });
    return promise;
};


exports.search_raiders = function (place) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();
    var promise = new Promise(function (resolve, reject) {
        var userSelectSql = "SELECT * FROM raiders WHERE title LIKE '%" + place + "%'";

        connection.query(userSelectSql, function (err, result) {
            if (result[0] != null) {
                resolve(result);
            }
            else {
                resolve('102');
            }
        });
    });

    return promise.then(function (value) {
        return value;

    }, function (value) {

    });
    return promise;
};



exports.add_travel_notes_list = function (title, date, background,text1,img1,text2) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();

    var promise = new Promise(function (resolve, reject) {

        var userAddSql = 'INSERT INTO travel_notes(title, date, background,text1,img1,text2) VALUES(?,?,?,?,?,?)';
        var userAddSql_Params = [title, date, background,text1,img1,text2];
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {

            } else {
                resolve('100');
            }
        });
    });

    return promise.then(function (value) {
        return value;
    }, function (value) {

    });
    return promise;
};


exports.add_raiders_list = function (title, description, details_description, background, text1, img1, text2, img2, text3, img3) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();

    var promise = new Promise(function (resolve, reject) {

        var userAddSql = 'INSERT INTO raiders(title, description, details_description, background, text1, img1, text2, img2, text3, img3) VALUES(?,?,?,?,?,?,?,?,?,?)';
        var userAddSql_Params = [title, description, details_description, background, text1, img1, text2, img2, text3, img3];
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {

            } else {
                resolve('100');
            }
        });
    });

    return promise.then(function (value) {
        return value;
    }, function (value) {

    });
    return promise;
};

exports.user_list = function () {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();
    var promise = new Promise(function (resolve, reject) {
        var userSelectSql = "SELECT * FROM user";

        connection.query(userSelectSql, function (err, result) {
            if (result[0] != null) {
                resolve(result);
            }
            else {
                resolve('102');
            }
        });
    });

    return promise.then(function (value) {
        return value;

    }, function (value) {

    });
    return promise;
};

exports.check_version = function () {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();
    //创建连接
    var list = new Array();
    var promise = new Promise(function (resolve, reject) {
        connection.query(
            "SELECT content FROM app_info WHERE name='version'",
            function selectCb(err, results) {
                if (err) {

                    console.log(err);

                }
                else {
                    list = results;
                    var obj = {
                        "name": list
                    };
                    version = JSON.stringify(obj);
                    resolve(version);

                }
            }
        );
        connection.end();
    });
    return promise.then(function (value) {
        return value;

    }, function (value) {

    });
    return promise;
};



exports.call_back = function (user_phone, user_name, text) {



    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'trip',
    });
    connection.connect();

    var date = new Date();
    var _date = date.toLocaleString();

    var promise = new Promise(function (resolve, reject) {

        var userAddSql = 'INSERT INTO call_back(user_phone, user_name, text, date) VALUES(?,?,?,?)';
        var userAddSql_Params = [user_phone, user_name,text,_date];
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {

            } else {
                resolve('100');
            }
        });
    });

    return promise.then(function (value) {
        return value;
    }, function (value) {

    });
    return promise;




};

























