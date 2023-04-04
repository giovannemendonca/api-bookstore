import { PrimaPublisherRepository } from '@src/repositories/prisma/prisma-publisher-repository'
import { RegisterService } from '../publisher/register'

export function MakePublisherService() {
  const publisherRepository = new PrimaPublisherRepository() // create | getPublisherByIdService | getPublisherService

  const registerService = new RegisterService(publisherRepository)
  return registerService
}
