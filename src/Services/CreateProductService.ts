
import Product from '../entity/Product'
import { getRepository } from 'typeorm'
import Type from '../entity/Type'

interface Request{
    name:string,
    type:Type,
    price:number,
    amount:number,
    profit:number
}

class CreateProductService {
  public async execute ({ name, type, price, amount, profit }: Request) :Promise<Product> {
    const ProductsRepository = getRepository(Product)

    const existsProductsSameName = await ProductsRepository.findOne({ where: { name } })

    if (existsProductsSameName) {
      throw Error('Already exists product with this name')
    }

    const product = ProductsRepository.create({
      name,
      type,
      price,
      amount,
      profit
    })
    console.log(type)

    await ProductsRepository.save(product)
    return product
  }
}

export default CreateProductService
