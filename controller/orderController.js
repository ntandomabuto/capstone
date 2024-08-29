import {getOrdersDb,getOrderDb,insertOrderDb, deleteOrderDb,updateOrderDb} from '../model/orderDb.js'


const getOrders = async (req,res)=>{
    try {
        res.json(await getOrdersDb())
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
    }
}

const getOrder = async (req,res)=>{
    try {
        res.json(await getOrderDb(req.params.id))
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
        
    }
}

const insertOrder = async (req,res)=>{
    try {
        let {reference,from_warehouse,to_warehouse,total_items,total_price,status,date} = req.body
        await insertOrderDb(reference,from_warehouse,to_warehouse,total_items,total_price,status,date)
        res.send('Added a order')
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to insert')
        
    }
}

const deleteOrder = async (req,res)=>{
    try {
        res.json(await deleteOrderDb(req.params.id))
        console.log('removed order');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to delete')
        
    }
}

const updateOrder = async (req,res)=>{
    try {
        let {reference,from_warehouse,to_warehouse,total_items,total_price,status,date} = req.body
        let orders = await getOrderDb(req.params.id)
        reference?reference=reference:reference=orders.reference
        from_warehouse?from_warehouse=from_warehouse:from_warehouse=orders.from_warehouse
        to_warehouse?to_warehouse=to_warehouse:to_warehouse=orders.to_warehouse
        total_items?total_items=total_items:total_items=orders.total_items
        total_price?total_price=total_price:total_price=orders.total_price
        status?status=status:status=orders.status
        date?date=date:date=orders.date

        await updateOrderDb(reference,from_warehouse,to_warehouse,total_items,total_price,status,date,req.params.id)
        console.log('updated the order');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to update')
        
    }
}

export {getOrders,getOrder,insertOrder,deleteOrder,updateOrder}