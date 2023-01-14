import nodemailer from 'nodemailer'

export const transporterBuilder = () => {
  return nodemailer.createTransport({
    host: 'sccg228@gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      user: 'sccg228@gmail.com',
      pass: process.env.GMAIL_PASS
    }
  })
}
