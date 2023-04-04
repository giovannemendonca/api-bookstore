import { AuthorRepository } from '@src/repositories/author-repository'
import { ResourceNotFoundError } from '../errors/resource-no-found-erro'
import { Author } from '@prisma/client'

export class FindAuthorService {
  constructor(private authorRepository: AuthorRepository) {}

  async execute(): Promise<Author[]> {
    const authors = await this.authorRepository.findMany()
    if (authors.length === 0) {
      throw new ResourceNotFoundError()
    }
    return authors
  }
}
