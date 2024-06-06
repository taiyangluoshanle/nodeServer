import { createExpressServer } from 'routing-controllers'
import { json, urlencoded } from 'body-parser'
import mongoose from 'mongoose'

import Routes from './routes'
import logger from './utils/logger'
import defaultConfig from './config/default'
import initMiddleware from './middleware'
import dbConnect from './utils/dbConnect'

const MONGODB_URI =
  'mongodb+srv://TopMuggle:CHOUdidi423@cluster0.2qsmdbz.mongodb.net/muggleDB?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery', false)
mongoose.connect(MONGODB_URI)
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
