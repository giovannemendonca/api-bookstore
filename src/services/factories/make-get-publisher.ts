import { PrimaPublisherRepository } from '@src/repositories/prisma/prima-publisher-repository'
import { GetPublisherService } from '../publisher/getPublisher'

export function makeGetPublisher() {
  const publisherRepository = new PrimaPublisherRepository()
  const getPublisher = new GetPublisherService(publisherRepository)

  return getPublisher
}
