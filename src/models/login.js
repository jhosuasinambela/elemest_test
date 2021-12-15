'use strict';
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  
  const login = sequelize.define('login',{
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
    tableName:'login'
  });
  login.prototype.comparePassword - function(password){
    return bcrypt.compareSync(password, this.password);
  }

  login.associate = function(models){
    login.hasOne(models.login,{
      foreignKey:'personal_user_id',
      targetKey: 'id'
    })
  };
  
  return login;
};