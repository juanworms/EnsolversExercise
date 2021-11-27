const db = require("../models");
const todoList = db.todoList;
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
  // Validate request
  if (!req.body.description) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create the object
  const aux = {
    realizado: req.body.realizado,
    description: req.body.description,
  };
 
  // Save the object in the database
  todoList.create(aux)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Internal Error"
      });
    });
};

// Retrieve all
exports.findAll = (req, res) => {
  const description = req.query.description;
  var condition = description ? { description: { [Op.like]: `%${description}%` } } : null;

  todoList.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Server error retrieving all"
      });
    });
};

// Find one by ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  todoList.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving  id" 
      });
    });
};

// Update by ID
exports.update = (req, res) => {
    const id = req.params.id;

    todoList.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "id=${id} was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating id=${id}"
        });
      });
};

//Delete one by ID
exports.delete = (req, res) => {
    const id = req.params.id;

    todoList.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "id=${id} deleted"
          });
        } else {
          res.send({
            message: `Cannot delete id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Internal server error deleting id=${id}"
        });
      });
};

