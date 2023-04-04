import { PrimaPublisherRepository } from '@src/repositories/prisma/prisma-publisher-repository'
import { GetPublisherService } from '../publisher/getPublisher'

export function makeGetPublisher() {
  const publisherRepository = new PrimaPublisherRepository()
  const getPublisher = new GetPublisherService(publisherRepository)

  return getPublisher
}
