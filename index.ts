import fastify from "fastify";

const server = fastify({
  trustProxy: true,
});

/*
import fastifyCors from 'fastify-cors';

// stole this from kythi (thanks)
server.register(fastifyCors, {
  origin: ['https://radiant.cool', /^http:\/\/localhost:\d+$/],
  credentials: true,
});
*/
import fastifyAutoload from 'fastify-autoload';
import {join} from 'path';

server.register(fastifyAutoload, {
  dir: join(__dirname, 'routes'),
});

server.listen(3000, () => {
    console.log("[server] | INFO | listening on port 3000")
})