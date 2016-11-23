'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('company_performances', {
    company_id: {
      type: DataTypes.INTEGER,
    },
    period_type_id: {
      type: DataTypes.INTEGER,
    },
    time_close: {
      type: DataTypes.DATE,
    },
    value_close: {
      type: DataTypes.DOUBLE,
    },
    value_open: {
      type: DataTypes.DOUBLE,
    },
    value_high: {
      type: DataTypes.DOUBLE,
    },
    value_low: {
      type: DataTypes.DOUBLE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'company_performances',
    underscored: true,
    
  });

  return Model;
};

