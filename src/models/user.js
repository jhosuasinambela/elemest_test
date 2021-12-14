'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    uid: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    city: DataTypes.STRING,
    birth: DataTypes.DATE,
    last_active: DataTypes.DATE,
    avatar_img_path: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};