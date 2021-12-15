'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const new_admin = sequelize.define('new_admin',{
    name : DataTypes.STRING,
    email : DataTypes.STRING,
    name : DataTypes.STRING,
    mobile_phone : DataTypes.STRING,
    date_of_birth : DataTypes.STRING,
  },{
    tableName:'new_admin'
  });
  new_admin.associate = function(models){
    new_admin.hasOne(models.admin_login,{
      foreignKey:'admin_id',
      sourceKey: 'id'
    })
  };
  
  return new_admin;
};