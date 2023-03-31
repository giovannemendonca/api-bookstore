import { describe, it, beforeEach, expect } from 'vitest'
import { RegisterService } from './register'
import { InMemoryPublisherRepository } from '@src/repositories/in-memory/in-memory-publisher-repository'

let publisherRepository: InMemoryPublisherRepository
let sut: RegisterService

describe('registe publisher', () => {
  beforeEach(() => {  
    publisherRepository = new InMemoryPublisherRepository()
    sut = new RegisterService(publisherRepository)
  })

  it('should create a publisher', async () => {
    const { publisher } = await sut.execute({
      name: 'Mendonça',
    })
    console.log(publisher)
    expect(publisher.id).toEqual(expect.any(String))
  })
})
