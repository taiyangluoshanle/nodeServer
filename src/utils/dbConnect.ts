import mongoose from 'mongoose'
import defaultConfig from '../config/default'
import logger from './logger'

export default async function dbConnect() {
  try {
    const connection = await mongoose.connect(defaultConfig.DB_URI)
    logger.info('Connected to MongoDB')
    return connection
  } catch (error) {
    logger.error('Could not connect to db')
    process.exit(1)
  }
}
