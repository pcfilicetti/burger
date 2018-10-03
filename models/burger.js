var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne("burgers", burger_name, function(result) {
            cb(result);
        });
    },
    updateOne: function(id, cb) {
        orm.updateOne("burgers", id, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;