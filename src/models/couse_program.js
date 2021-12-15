'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const course_program = sequelize.define('course_program',{
    name: DataTypes.STRING,
   
  },{
    tableName:'course_program'
  });
  course_program.associate = function(models){
    course_program.hasOne(models.course_program,{
      foreignKey:'course_type',
      targetKey: 'id'
    })
  };
  
  return course;
};