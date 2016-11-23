'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('transactions', {
    transaction_type: {
      type: DataTypes.INTEGER,
    },
    amount: {
      type: DataTypes.DOUBLE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'transactions',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

