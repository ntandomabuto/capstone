import { pool } from '../config/config.js'

const getRefDb = async ()=>{
    let [data] = await pool.query('select * from recent_invoice')
    return data
}

export {getRefDb}