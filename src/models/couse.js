'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const course = sequelize.define('course',{
    name: DataTypes.STRING,
    course_type: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    total_pop: DataTypes.STRING,
    is_free: DataTypes.INTEGER
  },{
    tableName:'course'
  });
  course.associate = function(models){
    course.hasOne(models.course,{
      foreignKey:'course_type',
      sourceKey: 'id'
    })
  };
  
  return course;
};