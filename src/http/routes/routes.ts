import { FastifyInstance } from 'fastify'
import { register } from '../controllers/publisher/register'
import { getPublisher } from '../controllers/publisher/getPubisher'

export async function appRoutes(app: FastifyInstance) {
  app
    .post('/api/publisher', register)
    .get('/api/publisher', getPublisher)
}
