import { describe, it, beforeEach, expect } from 'vitest'
import { InMemoryPublisherRepository } from '@src/repositories/in-memory/in-memory-publisher-repository'
import { GetPublisherByIdService } from './getPublisherById'
import { ResourceNotFoundError } from '../errors/resource-no-found-erro'

let publisherRepository: InMemoryPublisherRepository
let sut: GetPublisherByIdService

describe('get publisher by ID', () => {
  beforeEach(() => {
    publisherRepository = new InMemoryPublisherRepository()
    sut = new GetPublisherByIdService(publisherRepository)
  })

  it('should get a publisher by ID', async () => {
    const publisherCreated = await publisherRepository.create({
      name: 'Dantas',
    })
    const { publisher } = await sut.execute({
      id: publisherCreated.id,
    })
    expect(publisher).toEqual(publisherCreated)
  })

  it('should not get a publisher by ID', async () => {
    expect(sut.execute({ id: '123' })).rejects.toBeInstanceOf(
      ResourceNotFoundError,
    )
  })
})
