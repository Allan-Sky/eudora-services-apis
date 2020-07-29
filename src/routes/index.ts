import { Router } from 'express'
import ProductsRouter from './products.routes'
import TypesRouter from './types.routes'
const routes = Router()

routes.use('/products', ProductsRouter)
routes.use('/types', TypesRouter)

export default routes
