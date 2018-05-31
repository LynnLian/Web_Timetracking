'use strict';
module.exports = function (sequelize, DataTypes) {
    let Result = sequelize.define('timerecord', {
        startTime: DataTypes.INTEGER,
        endTime: DataTypes.INTEGER,
        note: DataTypes.TEXT,
        company: DataTypes.TEXT,
        username: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (models) {
            }
        }
    });
    return Result;
};