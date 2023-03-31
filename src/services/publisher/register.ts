import { Publisher } from '@prisma/client'
import { PublisherRepository } from '@src/repositories/publisher-repository'

interface RegisterPublisherRequest {
  name: string
}

interface RegisterPublisherResponse {
  publisher: Publisher
}

export class RegisterService {
  constructor(private publisherRepository: PublisherRepository) {}

  async execute(
    Pros: RegisterPublisherRequest,
  ): Promise<RegisterPublisherResponse> {
    const { name } = Pros

    const publisher = await this.publisherRepository.create({
      name,
    })

    return {
      publisher,
    }
  }
}
