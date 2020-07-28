import { getRepository } from 'typeorm'
import Product from '../entity/Product'

interface Request{
    name: string
    type: string
    price:number
    amount:number
    profit:number,
    product_id:string
}

export default new class UptadeProductService {
  public async execute ({ name, type, price, amount, profit, product_id } : Request) {
    const ProductsRepository = getRepository(Product)

    const existsProductsSameName = await ProductsRepository.findOne({ where: { name } })

    if (existsProductsSameName) {
      throw new Error('Already exists product with this name')
    }
    const product = await ProductsRepository.update({ id: product_id }, { name, type, price, amount, profit })

    return product
  }
}()
