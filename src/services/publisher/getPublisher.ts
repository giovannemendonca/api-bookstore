import { Publisher } from '@prisma/client'
import { PublisherRepository } from '@src/repositories/publisher-repository'

interface GetPublisherResponse {
  publisher: Publisher[]
}
export class GetPublisherService {
  constructor(private publisherRepository: PublisherRepository) {}

  async execute(): Promise<GetPublisherResponse> {
    const publisher = await this.publisherRepository.gerPublisher()

    return {
      publisher,
    }
  }
}
