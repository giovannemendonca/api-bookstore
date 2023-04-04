import { Prisma, Author } from '@prisma/client'
import { AuthorRepository } from '../author-repository'
import { prisma } from '@src/lib/prima'

export class PrismaAuthorRepository implements AuthorRepository {
  async findMany(): Promise<Author[]> {
    const author = await prisma.author.findMany()
    return author
  }
  async create(data: Prisma.AuthorCreateInput): Promise<Author> {
    const author = await prisma.author.create({
      data,
    })
    return author
  }
}
