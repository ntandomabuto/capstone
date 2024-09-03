import express from 'express'
import { getRef } from '../controller/refController.js'

const router = express.Router()

router.get('/',getRef)

export default router