import { pool } from '../config/config.js'

const getStocksDb = async ()=>{
    let [data] = await pool.query('select * from stock')
    return data
}

const getStockDb = async (id)=>{
    let [[data]] = await pool.query('select * from stock where stock_id=?',[id])
    return data
}

const insertStockDb = async (code,products,category,current_stock)=>{
    let [data] = await pool.query('insert into stock (code,products,category,current_stock) values (?,?,?,?)',[code,products,category,current_stock])
}

const deleteStockDb = async (id)=>{
    await pool.query('delete from stock where stock_id=?',[id])
}

const updateStockDb = async (code,products,category,current_stock,id)=>{
    let [data] = await pool.query('update stock set code=?,products=?,category=?,current_stock=? where stock_id=?',[code,products,category,current_stock,id])
    return data
}
export {getStocksDb,getStockDb,insertStockDb,deleteStockDb,updateStockDb}