import { Router, response } from 'express'
import { getRepository } from 'typeorm'
import Type from '../entity/Type'
import CreateTypeService from '../Services/CreateTypeService'

const typesRouter = Router()

typesRouter.get('/', async (request, response) => {
  const typesRepository = getRepository(Type)

  const types = await typesRepository.find()
  return response.json(types)
})

typesRouter.post('/', async (request, response) => {
  const { name } = request.body
  const type = await CreateTypeService.execute({ name })

  return response.json(type)
})

export default typesRouter
