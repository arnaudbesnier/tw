'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('dividends', {
    company_id: {
      type: DataTypes.INTEGER,
    },
    shares: {
      type: DataTypes.INTEGER,
    },
    received_at: {
      type: DataTypes.DATE,
    },
    amount: {
      type: DataTypes.DOUBLE,
    },
    taxes: {
      type: DataTypes.DOUBLE,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'dividends',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

