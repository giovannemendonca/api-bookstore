import { makeGetPublisher } from '@src/services/factories/make-get-publisher'

export async function getPublisher() {
  const getPublisher = makeGetPublisher()

  const publisherGet = (await getPublisher()).execute()

  return {
    publisher: (await publisherGet).publisher
  }
}
