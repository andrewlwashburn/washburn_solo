// import { createUser, updateUserByID, getAllUsers, getUserByID, deleteUserByID } from "../controllers/user.controller.js"
import { Router } from 'express'
import  * as userController from '../controllers/user.controller.js'

const router = Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)


// userRouter.route('/')
//     .get( getAllUsers )
//     .post( createUser )

// userRouter.route('/:id')
//     .get( getUserByID )
//     .put( updateUserByID )
//     .delete( deleteUserByID )

export default router
