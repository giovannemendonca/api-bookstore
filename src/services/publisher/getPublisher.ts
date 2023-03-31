import { Publisher } from '@prisma/client'
import { PublisherRepository } from '@src/repositories/publisher-repository'

interface GetPublisherResponse {
  publisher: Publisher[]
}
export class GetPublisherService {
  constructor(private publisherRepository: PublisherRepository) {}

  async execute(): Promise<GetPublisherResponse | null> {
    const publisher = await this.publisherRepository.gerPublisher()

    if (!publisher) {
      return null
    }
    return {
      publisher,
    }
  }
}
