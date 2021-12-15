'use strict';
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  
  const admin_login = sequelize.define('admin_login',{
    name : DataTypes.STRING,
    email : DataTypes.STRING,
    password : {
      type : DataTypes.STRING(2000),
      set(value){
        this.setDataValue('password',bcrypt.hashSync(value, 10));
      } 
    },
    token : DataTypes.STRING(2000),
  },{
    tableName:'admin_login'
  });
  admin_login.prototype.comparePassword - function(password){
    return bcrypt.compareSync(password, this.password);
  }

  admin_login.associate = function(models){
    admin_login.hasOne(models.login,{
      foreignKey:'admin_id',
      targetKey: 'id'
    })
  };
  
  return admin_login;
};