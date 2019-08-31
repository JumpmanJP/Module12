module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('log', {
        nameOfLog: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descriptionOfLog: {
            type: DataTypes.STRING,
            allowNull: false
        },
        definitionOfLog: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resultOfLog: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ownerOfLog: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Log;
}