import { getRepository } from 'typeorm'
import Type from '../entity/Type'

interface Request {
    name: string
}

class CreateTypeService {
  public async execute ({ name }: Request) :Promise<Type> {
    const typesRepository = getRepository(Type)

    const existsTypesSameName = await typesRepository.findOne({ where: { name } })

    if (existsTypesSameName) {
      throw Error('Already exists type with this name')
    }

    const type = typesRepository.create({
      name
    })

    await typesRepository.save(type)
    return type
  }
}

export default new CreateTypeService()
