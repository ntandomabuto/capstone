import express from 'express'
import { getRec } from '../controller/recController.js'

const router = express.Router()

router.get('/',getRec)

export default router