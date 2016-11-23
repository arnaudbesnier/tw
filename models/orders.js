'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('orders', {
    company_id: {
      type: DataTypes.INTEGER,
    },
    shares: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    order_type: {
      type: DataTypes.INTEGER,
    },
    commission: {
      type: DataTypes.DOUBLE,
    },
    taxes: {
      type: DataTypes.DOUBLE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    executed: {
      type: DataTypes.BOOLEAN,
    },
    executed_at: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'orders',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

