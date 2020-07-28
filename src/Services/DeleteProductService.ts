import Product from '../entity/Product'
import { getRepository } from 'typeorm'

class DeleteProductService {
  public async execute (product_id:string): Promise<void> {
    const ProductsRepository = getRepository(Product)

    const existsProduct = await ProductsRepository.findOne(product_id)

    await ProductsRepository.remove(existsProduct).then((a) => console.log('deletado', a))
  }
}
export default DeleteProductService
