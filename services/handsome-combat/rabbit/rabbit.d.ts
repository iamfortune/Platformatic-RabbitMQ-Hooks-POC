import { type FastifyReply, type FastifyPluginAsync } from 'fastify'
import { type GetHeadersOptions } from '@platformatic/client'

declare namespace rabbit {
  export type Rabbit = {
    getExample(req?: GetExampleRequest): Promise<GetExampleResponses>;
    publish(req?: PublishRequest): Promise<PublishResponses>;
  }
  export interface RabbitOptions {
    url: string
  }
  export const rabbit: RabbitPlugin;
  export { rabbit as default };
  export interface FullResponse<T, U extends number> {
    'statusCode': U;
    'headers': Record<string, string>;
    'body': T;
  }

  export type GetExampleRequest = {
    unknown
  }

  export type GetExampleResponseOK = unknown
  export type GetExampleResponses =
    FullResponse<GetExampleResponseOK, 200>

  export type PublishRequest = {
    'exchange': string;
    'routingKey': string;
  }

  export type PublishResponseOK = unknown
  export type PublishResponses =
    FullResponse<PublishResponseOK, 200>

}

type RabbitPlugin = FastifyPluginAsync<NonNullable<rabbit.RabbitOptions>>

declare module 'fastify' {
  interface ConfigureRabbit {
    getHeaders(req: FastifyRequest, reply: FastifyReply, options: GetHeadersOptions): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    configureRabbit(opts: ConfigureRabbit): unknown
  }

  interface FastifyRequest {
    'rabbit': rabbit.Rabbit;
  }
}

declare function rabbit(...params: Parameters<RabbitPlugin>): ReturnType<RabbitPlugin>;
export = rabbit;
