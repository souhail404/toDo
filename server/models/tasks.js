const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:false,
        default: null
    },
    date:{
        type:Date,
        require:false
    }
});

const Task = mongoose.model('tasks' , taskSchema);

module.exports = Task;