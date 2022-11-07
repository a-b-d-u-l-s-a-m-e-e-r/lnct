const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/dbname")
.then(function(){
    console.log("connected to db");
})

var userSchema= mongoose.Schema({
    name:String,
    username:String
})

module.exports=mongoose.model("user",userSchema);