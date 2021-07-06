const Task = require('../models/schema');



const getAllTask = async (req,res) =>{
    try {
        const task = await Task.find({});
        res.status(200).json({task});
        
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

const createTask = async (req,res) =>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
        
    } catch (error) {
        res.status(500).json({msg : error})
    }
    
}

const getTask = async (req,res) =>{
    try {
        //destructure the id and set the alias to "taskID"
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});

        if(!task){
            //always make sure to "return"
            return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.status(200).json({task});
        
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

const updateTask = async (req,res) =>{
    try {
        const {id:taskID} = req.params;
        // the options here is used to show the current updated value
        const task = await Task.findOneAndUpdate({_id : taskID},req.body,{
            new:true,
            runValidators:true
        });
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.status(200).json({task});

    } catch (error) {
        res.status(500).json({msg : error})
    }
}

const deleteTask = async (req,res) =>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg : `No task with id ${taskID}`});
        }
        res.status(200).json({msg:`task with ${taskID} deleted`});
        
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}