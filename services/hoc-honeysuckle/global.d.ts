import { FastifyInstance } from 'fastify'
import { RabbitmqHooksConfig, PlatformaticApp } from '@platformatic/rabbitmq-hooks'
  
declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<RabbitmqHooksConfig>
  }
}
