'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('portfolio_performances', {
    period_type_id: {
      type: DataTypes.INTEGER,
    },
    closed_at: {
      type: DataTypes.DATE,
    },
    value_close: {
      type: DataTypes.DOUBLE,
    },
    value_open: {
      type: DataTypes.DOUBLE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    closings: {
      type: DataTypes.INTEGER,
    },
    trade_gains: {
      type: DataTypes.DOUBLE,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'portfolio_performances',
    underscored: true,
    
  });

  return Model;
};

