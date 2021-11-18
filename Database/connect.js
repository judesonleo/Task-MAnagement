const mongoose = require('mongoose')



// const connectionstring='mongodb+srv://Judeson:Judeson143@nodeexpressprojects.6jttr.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

const connectDB =(url)=>{
   return  mongoose.connect(url)
}
module.exports=connectDB