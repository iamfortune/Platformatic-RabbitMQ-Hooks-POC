# Platformatic RabbitMQ Hooks Runtime POC

This project demonstrates how to use Platformatic to invoke RabbitMQ hooks from a Platformatic service. The client interacts with a remote OpenAPI and GraphQL API using Platformatic's client.

## Requirements

- Docker
- Node.js
- Platformatic CLI

## Setup

### Step 1: Start RabbitMQ using Docker

Create a `docker-compose.yml` file with the following contents:

```yaml
services:
  rabbitmq:
    image: rabbitmq:3
    container_name: 'rabbitmq'
    ports:
        - 5672:5672
        - 15672:15672
```

Start RabbitMQ by running:

```bash
docker-compose up
```

This command will start RabbitMQ with the ports exposed.

### Step 2: Create Platformatic Client

After setting up RabbitMQ, you can create a Platformatic client to interact with your Platformatic service. Run the following command:

```bash
npx platformatic client --runtime <serviceId || serviceName> --name <clientname>
```

Replace `<serviceId || serviceName>` with your specific service ID or name, and `<clientname>` with a name for your client.

The created client can now be used to invoke RabbitMQ hooks from your Platformatic service. Refer to the [Platformatic client documentation](https://docs.platformatic.dev/docs/client/overview) for detailed usage instructions and examples.

## Usage

Install dependencies and start your application:

```bash
npm install 
npm start
```

## Additional Resources

- [Platformatic Documentation](https://docs.platformatic.dev)
- [Platformatic Runtime documentation](https://docs.platformatic.dev/docs/runtime/overview)
- [Platformatic service documentation](https://docs.platformatic.dev/docs/service/overview)
- [Platformatic Client documentation](https://docs.platformatic.dev/docs/client/overview)

