import { pool } from '../config/config.js'

const getStocksDb = async ()=>{
    let [data] = await pool.query('select * from stock')
    return data
}

const getStockDb = async (id)=>{
    let [[data]] = await pool.query('select * from stock where stock_id=?',[id])
    return data
}

export {getStocksDb,getStockDb}