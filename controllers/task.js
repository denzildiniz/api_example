const Task = require('../models/schema');



const getAllTask = async (req,res) =>{
    const task = await Task.find();
    res.status(200).json(task);
}

const createTask = async (req,res) =>{
    const task = await Task.create(req.body);
    res.status(201).json({task});
    
}

const getTask = (req,res) =>{
    res.send("get single req");
}

const updateTask = (req,res) =>{
    res.send("update req");
}

const deleteTask = (req,res) =>{
    res.send("delete req");
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}