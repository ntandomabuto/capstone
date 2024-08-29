import express from 'express'
import {getOrders,getOrder,insertOrder,deleteOrder,updateOrder} from '../controller/orderController.js'

const router = express.Router()

router.get('/',getOrders)
router.post('/insert',insertOrder)


router
    .route('/:id')
        .get(getOrder)
        .delete(deleteOrder)
        .patch(updateOrder)


export default router