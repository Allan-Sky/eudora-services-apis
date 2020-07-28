import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import './database'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(routes)

app.use((
  err:Error,
  resquest:Request,
  response: Response,
  next: NextFunction) => {
  response.status(400).json({ error: err.message })
})
app.listen(8000, () => console.log('a'))
