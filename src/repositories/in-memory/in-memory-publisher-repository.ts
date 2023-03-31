import { Publisher, Prisma } from '@prisma/client'

import { PublisherRepository } from '../publisher-repository'
import { randomUUID } from 'crypto'

export class InMemoryPublisherRepository implements PublisherRepository {
  public items: Publisher[] = []

  async create(data: Prisma.PublisherCreateInput) {
    const publisher: Publisher = {
      id: randomUUID(),
      name: data.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.items.push(publisher)
    return publisher
  }

  async gerPublisher(): Promise<Publisher[]> {
    const publisher: Publisher[]= this.items

    return publisher
  }
}
