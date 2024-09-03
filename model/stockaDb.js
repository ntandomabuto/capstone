import { pool } from '../config/config.js'

const getStockaDb = async ()=>{
    let [data] = await pool.query('select * from stock_alert')
    return data
}

export {getStockaDb}