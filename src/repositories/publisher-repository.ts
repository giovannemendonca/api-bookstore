import { Publisher, Prisma } from '@prisma/client'

export interface PublisherRepository {
  create(data: Prisma.PublisherCreateInput): Promise<Publisher>  
  gerPublisher(): Promise<Publisher[] | null>
}
