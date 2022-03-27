import type {FastifyInstance} from 'fastify';

export default async function RegisterRouter(fastify: FastifyInstance) {
  fastify.get('/register', async () => {
    return {status: 200, message: 'Hello World!'};
  });
}

export const autoPrefix = '/register';