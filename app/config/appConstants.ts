import { Env } from '../types/env'
import dotenv from 'dotenv'

dotenv.config()

export const appConstants: Env = {
  isDev: process.env.__IS_DEV__ === 'true' || false,
  port: Number(process.env.PORT) || 8080,
  client_dev_url: process.env.CLIENT_DEV_URL || 'http://localhost:3000',
  client_prod_url:
    process.env.CLIENT_PROD_URL || 'https://portfolio-wan6sta.vercel.app',
  gmail_pass: String(process.env.GMAIL_PASS)
}
