const express = require('express')
const app= express()
const task =require('./Controllers/task')
const connectDB =require('./Database/connect')
require('dotenv').config()
const notFound=require('./NotFound/notfound')

// middleware
app.use(express.static('./Front'))
app.use(express.json());

app.use('/api/v1/tasks',task)
const port =3000
app.use(notFound);
// app.get('/hello',(res,req)=>{
    //     req.send('hello')
    // })
    // heloooooo
const start = async() =>{
    try {
        await connectDB(process.env.MONGOURL)
        app.listen(port,console.log(`Listening on PORT ${port}....`))
    } catch (error) {
        console.log('error...')
    }
}

start()


// console.log('Task Manager App')
