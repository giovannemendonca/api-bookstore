import { Author, Prisma } from '@prisma/client'

export interface AuthorRepository {
  create(data: Prisma.AuthorCreateInput): Promise<Author>
  findMany(): Promise<Author[]>
}
