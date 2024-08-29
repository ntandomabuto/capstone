import {pool} from '../config/config.js'

const getOrdersDb = async ()=>{
    let [data] = await pool.query('select * from orders')
    return data
}

const getOrderDb = async (id)=>{
    let [[data]] = await pool.query('select * from orders where tra_id=?',[id])
    return data
}

const insertOrderDb = async (reference,from_warehouse,to_warehouse,total_items,total_price,status,date)=>{
    let [data] = await pool.query('insert into orders (reference,from_warehouse,to_warehouse,total_items,total_price,status,date) values (?,?,?,?,?,?,?)',[reference,from_warehouse,to_warehouse,total_items,total_price,status,date])
}

const deleteOrderDb = async (id)=>{
    await pool.query('delete from orders where tra_id=?',[id])
}

const updateOrderDb = async (reference,from_warehouse,to_warehouse,total_items,total_price,status,date,id)=>{
    let [data] = await pool.query('update orders set reference=?,from_warehouse=?,to_warehouse=?,total_items=?,total_price=?,status=?,date=? where tra_id=?',[reference,from_warehouse,to_warehouse,total_items,total_price,status,date,id])
    return data
}


export {getOrdersDb,getOrderDb,insertOrderDb,deleteOrderDb,updateOrderDb}