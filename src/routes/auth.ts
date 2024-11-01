import { authController } from '../controllers/auth';
import express, { Router } from 'express';
import { authSchema, loginSchema } from '../vaildators/auth';
import { joiValidation } from '../middleware/joiVadiation';


const router = express.Router()
const authControllerInstance = authController.getInstance()

export const authRouter: () => Router = () => {


    router.post("/login", joiValidation(loginSchema.data), async (req, res, next) => {
        try {
            const { email, password } = req.body

            const  user = await authControllerInstance.login(email, password)
            
            return res.status(200).json({ message: "Successfully",user })
        } catch (error) {
            next(error)
        }
    })


    router.post("/register", joiValidation(authSchema.data), async (req, res, next) => {
        try {
            const { name, email, password, role } = req.body

            await authControllerInstance.adduser({ name, email, password, role })

            return res.status(201).json({ message: "User Created Successfully" })

        } catch (error) {
            next(error)
        }
    })


    return router
}