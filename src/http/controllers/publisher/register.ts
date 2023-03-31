import { MakePublisherService } from '@src/services/factories/make-publisher-service'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
  })

  const { name } = registerBodySchema.parse(request.body)

  const registerService = MakePublisherService()
  await registerService.execute({
    name,
  }).then(() => {
    return reply.status(201).send('publisher created')
  }).catch(() => {
    return reply.status(400).send('publisher not created')
  })

}
