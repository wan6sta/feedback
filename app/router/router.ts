import { Router } from 'express'
import { emailController } from '../controllers/EmailController'

export const router = Router()

router.post('/message', emailController.sendOnEmail)
