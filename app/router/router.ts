import { Router } from 'express'
import { emailController } from '../controllers/EmailController'

export const router = Router()

router.get('/', (req, res) => {
  res.json('Feedback Server')
})

router.post('/message', emailController.sendOnEmail)
