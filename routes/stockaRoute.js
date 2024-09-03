import express from 'express'
import { getStocka } from '../controller/stockaController.js'

const router = express.Router()

router.get('/',getStocka)

export default router