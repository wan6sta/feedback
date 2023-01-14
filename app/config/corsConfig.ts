import { CorsOptions } from 'cors'
import { appConstants } from './appConstants'
import dotenv from 'dotenv'

dotenv.config()

export const corsConfig: CorsOptions = {
  origin: [appConstants.client_dev_url, appConstants.client_prod_url],
  optionsSuccessStatus: 200
}
