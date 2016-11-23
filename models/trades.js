'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('trades', {
    shares: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    company_id: {
      type: DataTypes.INTEGER,
    },
    order_open_id: {
      type: DataTypes.INTEGER,
    },
    order_close_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'trades',
    underscored: true,
    
  });

  return Model;
};

