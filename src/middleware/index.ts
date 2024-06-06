import express, { type Express } from 'express'
import responseHeader from './responseHeader'

function initMiddleware(app: Express) {
  app.use(express.json())
  app.use(responseHeader)
}

export default initMiddleware
