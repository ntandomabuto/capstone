import {pool} from '../config/config.js'

const getProductsDb = async ()=>{
    let [data] = await pool.query('select * from products')
    return data
}

const getProductDb = async (id)=>{
    let [[data]] = await pool.query('select * from products where prod_id=?',[id])
    return data
}

const insertProductDb = async (prod_name,category,brand,price,quantity,prod_url,prod_description)=>{
    let [data] = await pool.query('insert into products (prod_name,category,brand,price,quantity,prod_url,prod_description) values (?,?,?,?,?,?,?)',[prod_name,category,brand,price,quantity,prod_url,prod_description])
}

export {getProductsDb,getProductDb,insertProductDb}