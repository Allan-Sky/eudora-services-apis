import { Router, response } from 'express'
import Product from '../entity/Product'
import { getRepository } from 'typeorm'
import CreateProductService from '../Services/CreateProductService'
import DeleteProductService from '../Services/DeleteProductService'
import UpdatedProductService from '../Services/UptadeProductService'
const ProductsRouter = Router()

ProductsRouter.post('/', async (request, response) => {
  const { name, type, price, amount, profit } = request.body
  const CreateService = new CreateProductService()

  const product = await CreateService.execute({ name, type, price, amount, profit })

  response.json(product)
})

ProductsRouter.get('/', async (request, response) => {
  const ProductRepository = getRepository(Product)

  const products = await ProductRepository.find()

  return response.json(products)
})

ProductsRouter.patch('/', async (request, response) => {
  const ProductRepository = getRepository(Product)
  const { amount, product_id } = request.body

  const product = await ProductRepository.findOne(product_id)
  product.amount = amount

  await ProductRepository.save(product)
  return response.json(product)
})

ProductsRouter.delete('/', async (request, response) => {
  const DeleteService = new DeleteProductService()
  const { product_id } = request.body

  await DeleteService.execute(product_id)

  return response.json({ ok: 'delete' })
})

ProductsRouter.put('/', async (request, response) => {
  const { name, type, profit, amount, product_id, price } = request.body
  const product = await UpdatedProductService.execute({ name, amount, price, product_id, profit, type })
  response.json(product)
})

export default ProductsRouter
