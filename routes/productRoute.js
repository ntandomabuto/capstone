import express from 'express'
import { getProduct, getProducts, insertProduct } from '../controller/productController.js'

const router = express.Router()

router.get('/',getProducts)
router.post('/insert',insertProduct)

router 
    .route('/:id')
        .get(getProduct)

export default router