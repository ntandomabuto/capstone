import { pool } from '../config/config.js'

const getExDb = async ()=>{
    let [data] = await pool.query('select * from expenses')
    return data
}


export {getExDb}