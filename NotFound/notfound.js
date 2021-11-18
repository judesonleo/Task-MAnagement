const notFound =(req,res)=>{
    res.status(404).send(`Invalid URL `)
}
module.exports=notFound