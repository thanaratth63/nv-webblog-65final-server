module.exports = (sequelize, DataTypes) => {
    const Coffee = sequelize.define('Coffee', {
        name: DataTypes.STRING,
        brand : DataTypes.STRING,
        detail: DataTypes.STRING,
        price: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
    })
    return Coffee
}