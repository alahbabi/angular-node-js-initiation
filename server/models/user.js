const mongoose = require('mongoose');
const schema = mongoose.Schema;

//User model
let User = new schema({
    firstname: {
      type: String,
      required: true,
      max: 100
    },
    lastname: {
      type: String,
      required: true,
      max: 100
    },
    login: {
      type: String,
      required: true,
      max: 100
    },
    password: {
      type: String,
      required: true,
      max: 100
    },
    email :{
      type: String,
      required: true,
      max: 100
    },
    tasks : [{
      type : schema.Types.ObjectId,
      ref : 'task'
    }]
});

module.exports = mongoose.model('user', User);
