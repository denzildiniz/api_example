const mongoose = require('mongoose');

const firstSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true,"must provide a name"],
        trim:true,
        maxlength:[20,"name cannot be more then 20 characters"]
    },
    intrested:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task',firstSchema);