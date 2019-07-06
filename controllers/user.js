const userModel = require('../models/user');

// Insert user
exports.addUser = async function(request, response, next){
  try {
    var user = new userModel(request.body);
    var result = await user.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

// Find all Users
exports.findAll = async function async(request, response , next){
  try {
      var users = await userModel.find().exec();
      response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
};

// Find user by Id
exports.findById = async function async(request, response, next){
  try {
    var user = await userModel.findById(request.params.id).exec();
    response.send(user);
  } catch (error) {
    reponse.status(500).send(error);
  }
};

// Modify user using his Id
exports.update = async function async(request, response, next){
    try {
      var user = await userModel.findById(request.params.id).exec();
      user.set(request.body);
      var savedUser = await user.save();
      response.send(savedUser);
    } catch (error) {
      reponse.status(500).send(error);
    }
};

// Delete a user using his Id
exports.delete = async function async(request, response, next){
  try {
    var deletedUser = await userModel.deleteOne({ _id: request.params.id}).exec();
    response.send(deletedUser);
  } catch (error) {
    reponse.status(500).send(error);
  }
};
