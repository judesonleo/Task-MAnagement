const Task = require('../Models/task-2')


const getAlltask =async (req,res)=>{
    try {
        const tasks =await Task.find({})
        res.status(200).json({tasks})
        // console.log('hi')
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
const createtask = async (req,res)=>{
    try {
        const task =await Task.create(req.body)
        console.log(req.body)
        res.status(201).json({task})
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
    }
const getTask =async (req,res)=>{
try {
    const {id:taskID}=req.params
    const task = await Task.findOne({_id:taskID});
    if(!task){
        return res.status(404).json({msg: `No Task With ID ${taskID}`})
    }
    res.status(200).json({task})


} catch (error) {
    res.status(500).json({msg: error})

}

    }

const updateTask = async (req,res)=>{
    try {
        const {id:taskID}=req.params
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){
            return res.status(404).json({msg: `No Task With ID ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
    }



const Deletetask =async (req,res)=>{
    try {
        const {id:taskID}=req.params
        const tasks = await Task.findOneAndDelete({ _id: taskID})
        if(!tasks){
            return res.status(404).json({msg: `No Task With ID ${taskID}`})
        }
        res.json({tasks})


    } catch (error) {
        
    res.status(500).json({msg: error})
    }
    }

    module.exports={
        getAlltask,
        createtask,
        getTask,
        updateTask,
        Deletetask
        
    }