module.exports = (sequelize, Sequelize) => {
    const todoList = sequelize.define("todoList", {
      realizado: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return todoList;
  };
