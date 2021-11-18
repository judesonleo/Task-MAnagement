const express = require('express')
const router = express.Router();
const {getAlltask,createtask,getTask,updateTask,Deletetask} =require('./task-1')

router.route('/').get(getAlltask).post(createtask)
router.route('/:id').get(getTask).patch(updateTask).delete(Deletetask)
module.exports=router