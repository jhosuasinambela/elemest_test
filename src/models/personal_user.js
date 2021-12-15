'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const personal_user = sequelize.define('personal_user',{
    name : DataTypes.STRING,
    email : DataTypes.STRING,
    name : DataTypes.STRING,
    mobile_phone : DataTypes.STRING,
    date_of_birth : DataTypes.STRING,
  },{
    tableName:'personal_user'
  });
  personal_user.associate = function(models){
    personal_user.hasOne(models.login,{
      foreignKey:'personal_user_id',
      sourceKey: 'id'
    })
  };
  
  return personal_user;
};