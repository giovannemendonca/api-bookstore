import { MakeGetAuthor } from '@src/services/factories/make-get-author'

export async function getAuthor() {
  const findManyAuthors = MakeGetAuthor()
  const authors = await findManyAuthors.execute()
  return authors
}
