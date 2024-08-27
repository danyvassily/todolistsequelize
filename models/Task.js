"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    idtasks: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "idUsers"
      }
    }
  }, {});

  Task.associate = function(models) {
    Task.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user"
    });

    Task.hasOne(models.Completed, {
      foreignKey: "task_id",
      as: "completed"
    });
  };

  return Task;
};
