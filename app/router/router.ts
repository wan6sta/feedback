import { Router } from 'express'
import { emailController } from '../controllers/EmailController'

export const router = Router()

router.post('/', (req, res) => {
  res.json('Feedback server')
})

router.post('/message', emailController.sendOnEmail)
