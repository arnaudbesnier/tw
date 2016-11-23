'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('active_admin_comments', {
    resource_id: {
      type: DataTypes.STRING,
    },
    resource_type: {
      type: DataTypes.STRING,
    },
    author_id: {
      type: DataTypes.INTEGER,
    },
    author_type: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    namespace: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'active_admin_comments',
    underscored: true,
    
  });

  return Model;
};

