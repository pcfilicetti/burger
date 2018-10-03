var connection = require("./connection.js");

var orm = {
    selectAll: function (table, cb) {
        connection.query("SELECT * FROM ??", [table], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (table, burger_name, cb) {
        var burg = {
            burger_name: burger_name,
            devoured: false
        };
        connection.query("INSERT INTO ?? SET ?", [table, burg], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function (table, id, cb) {
        connection.query("UPDATE ?? SET devoured = true WHERE id = ?", [table, id], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;