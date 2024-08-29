import { getStockDb,getStocksDb,insertStockDb,deleteStockDb,updateStockDb } from '../model/stockDb.js'


const getStocks = async (req,res)=>{
    try {
        res.json(await getStocksDb())
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
    }
}

const getStock = async (req,res)=>{
    try {
        res.json(await getStockDb(req.params.id))
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
        
    }
}

const deleteStock = async (req,res)=>{
    try {
        res.json(await deleteStockDb(req.params.id))
        console.log('removed stock');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to delete')
        
    }
}

const insertStock = async (req,res)=>{
    try {
        let {code,products,category,current_stock} = req.body
        await insertStockDb(code,products,category,current_stock)
        res.send('Added a stock')
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to insert stock')
        
    }
}

const updateStock = async (req,res)=>{
    try {
        let {code,products,category,current_stock} = req.body
        let stock = await getStockDb(req.params.id)
        code?code=code:code=stock.code
        products?products=products:products=stock.products
        category?category=category:category=stock.category
        current_stock?current_stock=current_stock:current_stock=stock.current_stock

        await updateStockDb(code,products,category,current_stock,req.params.id)
        console.log('stock updated');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to update')
        
    }
}

export {getStock,getStocks,deleteStock,insertStock,updateStock}