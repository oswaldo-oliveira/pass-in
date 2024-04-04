import { FastifyInstance } from 'fastify'
import { BadRequest } from './routes/_erros/bad-request'
import { ZodError } from 'zod'

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      code: 400,
      message: 'Erro during validation.',
      errors: error.flatten().fieldErrors,
    })
  }

  if (error instanceof BadRequest) {
    return reply.status(400).send({ code: 400, message: error.message })
  }
  return reply.status(500).send({ message: 'internal_server_error' })
}
