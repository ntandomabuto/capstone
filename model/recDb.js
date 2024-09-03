import { pool } from '../config/config.js'

const getRecDb = async ()=>{
    let [data] = await pool.query('select * from recent_sales')
    return data
}

export {getRecDb}