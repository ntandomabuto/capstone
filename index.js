import express from 'express'
import cors from 'cors'
import orderRoute from './routes/orderRoute.js'
import productRoute from './routes/productRoute.js'
import stockRoute from './routes/stockRoute.js'
import userRoute from './routes/userRoute.js'
import stockaRoute from './routes/stockaRoute.js'
import refRoute from './routes/refRoute.js'

let port = process.env.PORT || 6060
const app = express()


app.use(cors({
    origin: '*',
    credentials:true
}))
app.use(express.json())
app.use('/order',orderRoute)
app.use('/product',productRoute)
app.use('/stock',stockRoute)
app.use('/stocka',stockaRoute)
app.use('/user',userRoute)
app.use('/ref',refRoute)
app.use(express.static('public'))
app.listen(port,()=>{
    console.log('http://localhost:'+port);
})