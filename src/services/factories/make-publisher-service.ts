import { PrimaPublisherRepository } from '@src/repositories/prisma/prima-publisher-repository'
import { RegisterService } from '../publisher/register'

export function MakePublisherService() {

  const publisherRepository = new PrimaPublisherRepository()
  const registerService =  new RegisterService(publisherRepository)

  return registerService
}