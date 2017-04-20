const mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const locationSchema = new Schema({
    locationId : Number, // get latitude of center
    
    listBar : [{
        id : String ,
        img : String ,
        title : String ,
        description : String ,
        listUser : [{
            userId : Number 
        }]
        
    }]
});

const modelClass = mongoose.model("location",locationSchema);
module.exports = modelClass;