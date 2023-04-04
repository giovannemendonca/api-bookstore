import { Prisma, Author } from '@prisma/client'
import { AuthorRepository } from '../author-repository'
import { randomUUID } from 'crypto'

export class InMemoryAuthorRepositoy implements AuthorRepository {
  private items: Author[] = []

  async create(data: Prisma.AuthorCreateInput) {
    const author: Author = {
      id: randomUUID(),
      name: data.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(author)
    return author
  }

  async findMany(): Promise<Author[]> {
    const author: Author[] = this.items

    return author
  }
}
