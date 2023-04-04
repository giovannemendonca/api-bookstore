import { PrismaAuthorRepository } from '@src/repositories/prisma/prisma-author-repository'
import { FindAuthorService } from '../author/get-author'

export function MakeGetAuthor() {
  const authorRepository = new PrismaAuthorRepository()
  const getAuthor = new FindAuthorService(authorRepository)

  return getAuthor
}
