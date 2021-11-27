module.exports = app => {
    const controller = require("../Controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create new task
    router.post("/", controller.create);
  
    // Retrieve all 
    router.get("/", controller.findAll);
  
    // Retrieve a single task
    router.get("/:id", controller.findOne);
  
    // Update task by id
    router.put("/:id", controller.update);
  
    // Delete a task by id
    router.delete("/:id", controller.delete);
  
    app.use('/api/app', router);
  };