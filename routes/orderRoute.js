import express from 'express'
import {getOrders,getOrder,insertOrder,deleteOrder,updateOrder} from '../controller/orderController.js'
import { verifyAToken } from '../middleware/authenticate.js'

const router = express.Router()


router.use(verifyAToken)
router.get('/',getOrders)
router.post('/insert',insertOrder)


router
    .route('/:id')
        .get(getOrder)
        .delete(deleteOrder)
        .patch(updateOrder)


export default router