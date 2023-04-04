import { InMemoryAuthorRepositoy } from '@src/repositories/in-memory/in-memory-author-repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { RegisterAuthorService } from './register'

let authorRepository: InMemoryAuthorRepositoy
let sut: RegisterAuthorService

describe('register author service', () => {
  beforeEach(() => {
    authorRepository = new InMemoryAuthorRepositoy()
    sut = new RegisterAuthorService(authorRepository)
  })

  it('should be able to register an author', async () => {
    const { author } = await sut.execute({
      name: 'Mendonça',
    })
    expect(author.id).toEqual(expect.any(String))
    expect(author.name).toEqual('Mendonça')
  })
})
