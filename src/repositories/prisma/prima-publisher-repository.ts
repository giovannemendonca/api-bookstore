import { Prisma, Publisher } from '@prisma/client'
import { PublisherRepository } from '../publisher-repository'
import { prisma } from '@src/lib/prima'

export class PrimaPublisherRepository implements PublisherRepository {
  async gerPublisher(): Promise<Publisher[] | null> {
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
