const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Task model
let Task = new schema({
    name: {
      type: String,
      required: true,
      max: 100
    },
    language: {
      type: String,
      required: true,
      max: 100
    },
    seller: {
      type : schema.Types.ObjectId,
      ref : 'user'
    }
});

module.exports = mongoose.model('task', Task);
