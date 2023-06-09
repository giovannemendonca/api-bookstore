import { Publisher } from '@prisma/client'
import { PublisherRepository } from '@src/repositories/publisher-repository'
import { ResourceNotFoundError } from '../errors/resource-no-found-erro'

interface GetPublisherResponse {
  publisher: Publisher[]
}
export class GetPublisherService {
  constructor(private publisherRepository: PublisherRepository) {}

  async execute(): Promise<GetPublisherResponse> {
    const publisher = await this.publisherRepository.gerPublisher()

    if (publisher.length === 0) {
      throw new ResourceNotFoundError()
    }

    return {
      publisher,
    }
  }
}
