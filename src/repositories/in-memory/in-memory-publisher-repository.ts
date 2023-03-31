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

  
  gerPublisher(): Promise<Publisher[] | null> {
    throw new Error('Method not implemented.')
  }
}
