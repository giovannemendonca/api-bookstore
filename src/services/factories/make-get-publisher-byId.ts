import { PrimaPublisherRepository } from '@src/repositories/prisma/prisma-publisher-repository'
import { GetPublisherByIdService } from '../publisher/getPublisherById'

export function MakeGetPublisherById() {
  const publisherRepository = new PrimaPublisherRepository()
  const getPublisher = new GetPublisherByIdService(publisherRepository)

  return getPublisher
}
