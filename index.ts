import express, { Express } from 'express'
import cors from 'cors'
import { appConstants } from './app/config/appConstants'
import { corsConfig } from './app/config/corsConfig'
import { router } from './app/router/router'

const app: Express = express()

app.use(express.json())
app.use(cors(corsConfig))
app.use('', router)
app.use(express.static('dist'))

app.listen(appConstants.port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${appConstants.port}`
  )
})

module.exports = app
