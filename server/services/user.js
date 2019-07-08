const userModel = require('../models/user');
const csvToJson = require('csvtojson');
const jsonToCsv = require('json2csv').parse;
const fileSystem = require("fs");

// Find all Users
exports.findAll = async function (){
  try {
        var users = await userModel.find().exec();
        return users;
    } catch (error) {
        throw Error('Error while Searching Users  : ' + error.message);
    }
};

// Insert user
exports.addUser = async function(body){
  try {
    var user = new userModel(body);
    var result = await user.save();
    return result;
  } catch (error) {
      throw Error('Error while Inserting User  : ' + error.message);
  }
};

// Find user by Id
exports.findById = async function(id){
  try {
    var user = await userModel.findById(id).exec();
    return user;
  } catch (error) {
      throw Error('Error while Finding User By Id : ' + error.message);
  }
};

// Modify user using his Id
exports.update = async function(id, body){
    try {
      var user = await userModel.findById(id).exec();
      if(user === undefined || user === null){
          throw Error('User not found with id ' + id);
      }
      user.set(body);
      var savedUser = await user.save();
      return savedUser;
    } catch (error) {
        throw Error('Error while Updating User : ' + error.message);
    }
};

// Delete a user using his Id
exports.delete = async function(id){
  try {
    var deletedUser = await userModel.deleteOne({ _id: id}).exec();
    return deletedUser;
  } catch (error) {
      throw Error('Error while Deleting User : ' + error.message);
  }
};

//Inserting All Users In DataBase From Csv File
exports.csvToDatabase = async function(fileName) {
  try {
    csvToJson().fromFile("./files/csv/"+fileName).then(source => {
      source.forEach(function(line) {
        var user = new userModel(line);
        user.save();
      });
    })
  } catch (e) {
      throw Error('Error while reading file : ' + error.message);
  }
};

// Insert All Users From Json Body To csv
exports.jsonToCsv = async function(body, fileName) {
  try {
    const csv = jsonToCsv(body, {
      fields : ["firstname", "lastname", "login", "password", "email"]
    });
    fileSystem.writeFileSync("./files/csv/"+fileName, csv);
  } catch (e) {
      throw Error('Error while reading file : ' + error.message);
  }
};
