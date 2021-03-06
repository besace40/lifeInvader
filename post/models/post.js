let mongoose = require('mongoose');
// define the schema for our user model
let Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: String,
    description : String,
		user : {
      type : Schema.Types.ObjectId, ref:'User'},
    createdAt : {
      type : Date,
      default : Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);
