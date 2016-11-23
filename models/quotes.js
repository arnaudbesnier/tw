'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('quotes', {
    company_id: {
      type: DataTypes.INTEGER,
    },
    value: {
      type: DataTypes.DOUBLE,
    },
    value_day_open: {
      type: DataTypes.DOUBLE,
    },
    value_day_low: {
      type: DataTypes.DOUBLE,
    },
    value_day_high: {
      type: DataTypes.DOUBLE,
    },
    variation_day_low: {
      type: DataTypes.DOUBLE,
    },
    variation_day_high: {
      type: DataTypes.DOUBLE,
    },
    variation_day_current: {
      type: DataTypes.DOUBLE,
    },
    volume: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'quotes',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

