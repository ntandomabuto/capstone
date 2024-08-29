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

const updateProductDb = async (prod_name,category,brand,price,quantity,prod_url,prod_description,id)=>{
    let [data] = await pool.query('update products set prod_name=?,category=?,brand=?,price=?,quantity=?,prod_url=?,prod_description=? where prod_id=?',[prod_name,category,brand,price,quantity,prod_url,prod_description,id])
    return data
}

const deleteProductDb = async (id)=>{
    await pool.query('delete from products where prod_id=?',[id])
}
export {getProductsDb,getProductDb,insertProductDb,updateProductDb,deleteProductDb}