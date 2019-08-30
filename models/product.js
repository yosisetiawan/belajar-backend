'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER
  }, {});
  product.associate = function(models) {
    product.belongsTo(models.user, {
      as:'createdBy',
      foreignKey: 'created_by'
    })
  };
  return product;
};