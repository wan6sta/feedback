import { Request, Response } from 'express'
import { transporterBuilder } from '../../entities/Transporter/Transporter'

interface MessageModel {
  name: string
  gmail: string
  text: string
}

class EmailController {
  async sendOnEmail(
    req: Request<undefined, string, MessageModel>,
    res: Response
  ) {
    const { name, text, gmail } = req.body
    const transporter = transporterBuilder()

    try {
      await transporter.sendMail({
        from: gmail,
        to: 'wan6sta@gmail.com',
        subject: `Reverse review from ${name}`,
        html: `${text}`
      })

      res.status(200).send('Message sent ')
    } catch (e) {
      res.status(400).send('Some error occurred')
    }
  }
}

export const emailController = new EmailController()
