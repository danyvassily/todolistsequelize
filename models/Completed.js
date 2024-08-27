"use strict";
module.exports = (sequelize, DataTypes) => {
  const Completed = sequelize.define("Completed", {
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Tasks",
        key: "idtasks"
      }
    },
    status: {
      type: DataTypes.ENUM("pending", "done"),
      allowNull: false
    }
  }, {});

  Completed.associate = function(models) {
    Completed.belongsTo(models.Task, {
      foreignKey: "task_id",
      as: "task"
    });
  };

  return Completed;
};
