import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'

class App {
  public express: express.Application

  constructor () {
    dotenv.config()
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(helmet())
    this.express.use(cors())
    this.express.use(express.json())
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
