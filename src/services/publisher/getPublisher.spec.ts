import { InMemoryPublisherRepository } from '@src/repositories/in-memory/in-memory-publisher-repository'
import { GetPublisherService } from './getPublisher'
import { describe, it, beforeEach, expect } from 'vitest'

let publisherRepository: InMemoryPublisherRepository
let sut: GetPublisherService

describe('get publisher', () => {
  beforeEach(() => {
    publisherRepository = new InMemoryPublisherRepository()
    sut = new GetPublisherService(publisherRepository)
  })

  it.skip('should get a publisher', async () => {
    const data = await sut.execute()
    expect(data?.publisher).toEqual(expect.any(Array))
  })
})
