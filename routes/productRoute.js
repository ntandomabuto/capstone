import express from 'express'
import { getProduct, getProducts, insertProduct,updateProduct,deleteProduct } from '../controller/productController.js'

const router = express.Router()

router.get('/',getProducts)
router.post('/insert',insertProduct)

router 
    .route('/:id')
        .get(getProduct)
        .patch(updateProduct)
        .delete(deleteProduct)

export default router