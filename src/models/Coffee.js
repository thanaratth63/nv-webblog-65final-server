module.exports = (sequelize, DataTypes) => {
    const Coffee = sequelize.define('Coffee', {
        name : DataTypes.STRING,
        price : DataTypes.STRING,
        contain: DataTypes.STRING,
        calorie: DataTypes.STRING,
        status: DataTypes.STRING,
    })
    return Coffee
}