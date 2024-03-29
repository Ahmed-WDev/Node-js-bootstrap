
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const CostomerSchema = new Schema({
  FirstName : String,
  LastName : String,
  Email : String,
  PhoneNumber : String,
  Age : Number,
  Country : String,
  Gender : String,
},
{ timestamps: true }
);



// Create a model based on that schema
const User = mongoose.model("User", CostomerSchema);
 
 
// export the model
module.exports = User;
