import express, { Express } from 'express'
import cors from 'cors'
import { appConstants } from './app/config/appConstants'
import { corsConfig } from './app/config/corsConfig'

const app: Express = express()
app.use(cors(corsConfig))

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server')
})

app.listen(appConstants.port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${appConstants.port}`
  )
})
