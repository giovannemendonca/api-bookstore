import { Author } from '@prisma/client'
import { AuthorRepository } from '@src/repositories/author-repository'

interface RegisterAuthorRequest {
  name: string
}
interface RegisterAuthorResponse {
  author: Author
}

export class RegisterAuthorService {
  constructor(private authorRepository: AuthorRepository) {}

  async execute(Props: RegisterAuthorRequest): Promise<RegisterAuthorResponse> {
    const { name } = Props

    const author = await this.authorRepository.create({
      name,
    })

    return {
      author,
    }
  }
}
