import { InMemoryAuthorRepositoy } from '@src/repositories/in-memory/in-memory-author-repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { FindAuthorService } from './get-author'
import { ResourceNotFoundError } from '../errors/resource-no-found-erro'

let authorRepository: InMemoryAuthorRepositoy
let sut: FindAuthorService

describe('getAuthors many authors', async () => {
  beforeEach(() => {
    authorRepository = new InMemoryAuthorRepositoy()
    sut = new FindAuthorService(authorRepository)
  })

  it('should be able to get many authors', async () => {
    await authorRepository.create({
      name: 'Mendonça',
    })
    await authorRepository.create({
      name: 'Dantas',
    })

    const authors = await sut.execute()

    expect(Array.isArray(authors))
    expect(authors.length).toEqual(2)
    expect(authors[0].name).toEqual('Mendonça')
  })

  it('should not be able to search for authos', async () => {
    expect(sut.execute()).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
