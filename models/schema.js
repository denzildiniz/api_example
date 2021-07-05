const mongoose = require('mongoose');

const firstSchema = new mongoose.Schema({
    name :{
        type:String,
        require:true
    },
    intrested:{
        type:Boolean,
        require:true
    }
})

module.exports = mongoose.model('Task',firstSchema);