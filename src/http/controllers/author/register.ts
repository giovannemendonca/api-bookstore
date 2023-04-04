import { MakeAuthorRegister } from '@src/services/factories/make-register-author'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerAuthor(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerAuthor = MakeAuthorRegister()

  const registerAuthorSchema = z.object({
    name: z.string(),
  })
  const { name } = registerAuthorSchema.parse(request.body)

  await registerAuthor
    .execute({
      name,
    })
    .then(() => {
      return reply.status(201).send('author created')
    })
    .catch((err) => {
      return reply.status(400).send(err.message)
    })
}
