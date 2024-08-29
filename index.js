import express from 'express'
import cors from 'cors'
import orderRoute from './routes/orderRoute.js'
import productRoute from './routes/productRoute.js'


let port = process.env.PORT || 6060
const app = express()


app.use(express.json())
app.use(cors({
    origin: '*',
    credentials:true
}))
app.use(express.static('public'))
app.use('/order',orderRoute)
app.use('/product',productRoute)
app.listen(port,()=>{
    console.log('http://localhost:'+port);
})