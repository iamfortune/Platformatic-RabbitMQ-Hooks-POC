/// <reference path="../global.d.ts" />
/// <reference path="../rabbit/rabbit.d.ts" />
"use strict";
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {

  fastify.post("/send", async function (request, reply) {
    await request.rabbit.publish({
      exchange: "my-exchange",
      routingKey: "my-queue",
      ...request.body,
    });

    return reply.status(201).send({
      status: "Success",
      statusCode: 201,
      message: "Message successfully sent to RabbitMQ server.",
    });
  });

  fastify.post("/receive", async function (request, reply) {
    request.log.info({ body: request.body });

    return reply.send({
      status: "Success",
      statusCode: 200,
      message: "Message successfully received from RabbitMQ server.",
    });
  });
};
