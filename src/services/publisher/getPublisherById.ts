import { Publisher } from '@prisma/client'
import { PublisherRepository } from '@src/repositories/publisher-repository'
import { ResourceNotFoundError } from '../errors/resource-no-found-erro'

interface GetPublisherByIdRequest {
  id: string
}

interface GetPublisherByIdResponse {
  publisher: Publisher
}

export class GetPublisherByIdService {
  constructor(private publisherRepository: PublisherRepository) {}

  async execute({ id }: GetPublisherByIdRequest): Promise<GetPublisherByIdResponse> {
    const publisher = await this.publisherRepository.getPublisherById(id)

    if (!publisher) {
      throw new ResourceNotFoundError()
    }
    return {
      publisher,
    }
  }
}
