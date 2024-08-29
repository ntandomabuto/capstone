import { getProductsDb,getProductDb,insertProductDb } from '../model/productDb.js'


const getProducts = async (req,res)=>{
    try {
        res.json(await getProductsDb())
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
    }
}

const getProduct = async (req,res)=>{
    try {
        res.json(await getProductDb(req.params.id))
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
        
    }
}

const insertProduct = async (req,res)=>{
    try {
        let {prod_name,category,brand,price,quantity,prod_url,prod_description} = req.body
        await insertProductDb(prod_name,category,brand,price,quantity,prod_url,prod_description)
        res.send('Added a product')
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to insert product')
        
    }
}

export {getProducts,getProduct,insertProduct}