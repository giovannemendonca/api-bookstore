import { InMemoryPublisherRepository } from '@src/repositories/in-memory/in-memory-publisher-repository'
import { GetPublisherService } from './getPublisher'
import { describe, it, beforeEach, expect } from 'vitest'
import { ResourceNotFoundError } from '../errors/resource-no-found-erro'

let publisherRepository: InMemoryPublisherRepository
let sut: GetPublisherService

describe('get publisher', () => {
  beforeEach(() => {
    publisherRepository = new InMemoryPublisherRepository()
    sut = new GetPublisherService(publisherRepository)
  })

  it('should get a publisher', async () => {
    await publisherRepository.create({
      name: 'Mendonça',
    })
    await publisherRepository.create({
      name: 'Soares',
    })
    const data = await sut.execute()

    expect(data).toHaveProperty('publisher')
    expect(Array.isArray(data.publisher)).toBe(true)
    expect(data.publisher).toHaveLength(2)
  })

  it('should are no publishers in the database', async () => {
    expect(sut.execute()).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
