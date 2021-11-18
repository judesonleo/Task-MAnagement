const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'Must Provide Names!!'],
        maxlength:[20,'Must Be beloe 20 Charcters!!'],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports= mongoose.model('Task',TaskSchema)