'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('admin_users', {
    email: {
      type: DataTypes.STRING,
    },
    encrypted_password: {
      type: DataTypes.STRING,
    },
    reset_password_token: {
      type: DataTypes.STRING,
    },
    reset_password_sent_at: {
      type: DataTypes.DATE,
    },
    remember_created_at: {
      type: DataTypes.DATE,
    },
    sign_in_count: {
      type: DataTypes.INTEGER,
    },
    current_sign_in_at: {
      type: DataTypes.DATE,
    },
    last_sign_in_at: {
      type: DataTypes.DATE,
    },
    current_sign_in_ip: {
      type: DataTypes.STRING,
    },
    last_sign_in_ip: {
      type: DataTypes.STRING,
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
    tableName: 'admin_users',
    underscored: true,
    
  });

  return Model;
};

