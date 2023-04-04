import { PrismaAuthorRepository } from '@src/repositories/prisma/prisma-author-repository'
import { RegisterAuthorService } from '../author/register'

export function MakeAuthorRegister() {
  const authorRepository = new PrismaAuthorRepository()
  const registerAutor = new RegisterAuthorService(authorRepository)

  return registerAutor
}
