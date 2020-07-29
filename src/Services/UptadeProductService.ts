import { getRepository } from 'typeorm'
import Product from '../entity/Product'
import Type from '../entity/Type'

interface Request{
    name: string
    type: Type
    price:number
    amount:number
    profit:number,
    product_id:string
}

export default new class UptadeProductService {
  public async execute ({ name, type, price, amount, profit, product_id } : Request) :Promise<void> {
    const ProductsRepository = getRepository(Product)

    const existsProductsSameName = await ProductsRepository.findOne({ where: { name } })

    if (existsProductsSameName) {
      throw new Error('Already exists product with this name')
    }
    await ProductsRepository.update({ id: product_id }, { name, type, price, amount, profit })
  }
}()
