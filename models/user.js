const mongoose = require('mongoose');
const schema = mongoose.Schema;

//User model
let User = new schema({
    name: {
      type: String,
      required: true,
      max: 100
    },
    adress: {
      type: String,
      required: true,
      max: 200
    }
});

module.exports = mongoose.model('user', User);
