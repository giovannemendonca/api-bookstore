import fastify from 'fastify'
 
export const app = fastify()

app.get('/api', async() => {
  return { message: 'Welcome to Api' }
})