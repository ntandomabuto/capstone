import { getProductsDb,getProductDb,insertProductDb,updateProductDb,deleteProductDb } from '../model/productDb.js'


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

const updateProduct = async (req,res)=>{
    try {
        let {prod_name,category,brand,price,quantity,prod_url,prod_description} = req.body
        let products = await getProductDb(req.params.id)
        prod_name?prod_name=prod_name:prod_name=products.prod_name
        category?category=category:category=products.category
        brand?brand=brand:brand=products.brand
        price?price=price:price=products.price
        quantity?quantity=quantity:quantity=products.quantity
        prod_url?prod_url=prod_url:prod_url=products.prod_url
        prod_description?prod_description=prod_description:prod_description=products.prod_description
        

        await updateProductDb(prod_name,category,brand,price,quantity,prod_url,prod_description,req.params.id)
        console.log('updated product');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to update')
        
    }
}

const deleteProduct = async (req,res)=>{
    try {
        res.json(await deleteProductDb(req.params.id))
        console.log('Product deleted');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to delete')
        
    }
}

export {getProducts,getProduct,insertProduct,updateProduct,deleteProduct}