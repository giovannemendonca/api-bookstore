import { FastifyInstance } from 'fastify'
import { register } from '../controllers/publisher/register'
import { getPublisher } from '../controllers/publisher/getPublisher'
import { getPublisherById } from '../controllers/publisher/getPulisherById'
import { registerAuthor } from '../controllers/author/register'
import { getAuthor } from '../controllers/author/getAuthor'

export async function appRoutes(app: FastifyInstance) {
  app
    .post('/api/publisher', register)
    .get('/api/publisher', getPublisher)
    .get('/api/publisher/:id', getPublisherById)
    .post('/api/author', registerAuthor)
    .get('/api/author', getAuthor)
}
