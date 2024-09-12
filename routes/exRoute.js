import express from 'express'
import { getExp } from '../controller/exController.js'


const router = express.Router()

router.get('/',getExp)

export default router