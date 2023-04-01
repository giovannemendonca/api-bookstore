import { MakeGetPublisherById } from '@src/services/factories/make-get-publisher-byId'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getPublisherById(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getPublisherByIdSchema = z.object({
    id: z.string(),
  })

  const { id } = getPublisherByIdSchema.parse(request.params)

  const getPublisherByIdService = MakeGetPublisherById()

  const publisher = await getPublisherByIdService.execute({
    id,
  })

  return reply.status(200).send(publisher)
}
