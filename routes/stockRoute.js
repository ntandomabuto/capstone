import express from 'express'
import { getStock,getStocks,insertStock,updateStock,deleteStock } from '../controller/stockController.js'

const router = express.Router()

router.get('/',getStocks)
router.post('/insert',insertStock)

router
    .route('/:id')
        .get(getStock)
        .delete(deleteStock)
        .patch(updateStock)



export default router