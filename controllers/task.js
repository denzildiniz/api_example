

const getAllTask = (req,res) =>{
    res.send("get request");
}

const createTask = (req,res) =>{
    res.send("post req");
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