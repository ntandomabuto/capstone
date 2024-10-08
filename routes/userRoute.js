import express from 'express'
import { fetchUser,fetchUsers,registerUser,deleteUser,updateUser,loginUser } from '../controller/userController.js'
import {checkUser} from '../middleware/authenticate.js'

const router = express.Router()


router.post('/login',checkUser,loginUser)
router.get('/',fetchUsers)
router.post('/register',registerUser)

router
    .route('/:id')
        .get(fetchUser)
        .delete(deleteUser)
        .patch(updateUser)

export default router