import { Prisma, Publisher } from '@prisma/client'
import { PublisherRepository } from '../publisher-repository'
import { prisma } from '@src/lib/prima'

export class PrimaPublisherRepository implements PublisherRepository {
  async  getPublisherById(id: string) {
    const publisher = prisma.publisher.findUnique({
      where: {
        id: id
      }
    })
    return publisher
  }
  async gerPublisher(): Promise<Publisher[]> {
    const publisher = await prisma.publisher.findMany()

    return publisher
  }

  async create(data: Prisma.PublisherCreateInput) {
    const publisher = await prisma.publisher.create({
      data,
    })
    return publisher
  }
}
