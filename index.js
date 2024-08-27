import express from 'express'
import cors from 'cors'


let port = process.env.PORT || 6060
const app = express()


app.use(express.json())
// app.use(cors({
//     origin: '*',
//     credentials:true
// }))
app.use(express.static('public'))
app.use('/',)
app.listen(port,()=>{
    console.log('http://localhost:'+port);
})