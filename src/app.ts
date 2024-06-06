import { createExpressServer } from 'routing-controllers'
import { json, urlencoded } from 'body-parser'
import mongoose from 'mongoose'
import 'dotenv/config'

import Routes from './routes'
import logger from './utils/logger'
import defaultConfig from './config/default'
import initMiddleware from './middleware'
import dbConnect from './utils/dbConnect'

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URI ?? '')
const app = createExpressServer({
  controllers: [],
})
app.use(json())
app.use(urlencoded({ extended: true }))
initMiddleware(app)

const PORT = defaultConfig.port

app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  await dbConnect()
  Routes(app)
})
