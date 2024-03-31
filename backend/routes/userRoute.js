var express = require("express");
var user_route = express();

const userController = require("../controllers/userController");

const bodyParser = require("body-parser");
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

// Retrieve all users with pagination support.

user_route.get("/users", userController.getAllUser);

// Retrieve a specific user by ID.

user_route.get("/users/:id", userController.getUser);

// Create a new user.

user_route.post("/users", userController.createUser);

// Update an existing user.

user_route.put("/users/:id", userController.updateUser);

// Delete a user.

user_route.delete("/users/:id", userController.deleteUser);

module.exports = user_route;
