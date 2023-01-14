import express from 'express'
import cors from 'cors'
import { corsConfig } from '../app/config/corsConfig'
import { router } from '../app/router/router'
import { appConstants } from '../app/config/appConstants'

const app = express()

app.use(express.json())
app.use(cors(corsConfig))
app.use('', router)
app.use(express.static('public'))

app.listen(appConstants.port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${appConstants.port}`
  )
})

module.exports = app
