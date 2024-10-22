import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import helmet from 'helmet';
import buildSchema from 'type-graphql';
import redis from 'redis';
import { KafkaClient, Producer } from 'kafka-node';
import { UserResolver } from './resolvers/UserResolver';
import { TripResolver } from './resolvers/TripResolver';

const startServer = async () => {
  const app = express();
  app.use(helmet());

  const schema = await buildSchema({
    resolvers: [UserResolver, TripResolver],
  });

  const server = new ApolloServer({ schema });
  server.applyMiddleware({ app });

  createConnection()
    .then(async () => {
      console.log('Connected to the database');

      const redisClient = redis.createClient({
        socket :{
          host: 'redis-server',
          port: 6379,
        }
      });
      redisClient.on('connect', () => {
        console.log('Connected to Redis');
      });

      const kafkaClient = new KafkaClient({ kafkaHost: 'localhost:9092' });
      const producer = new Producer(kafkaClient);
      producer.on('ready', () => {
        console.log('Kafka Producer is connected and ready.');
      });

      app.listen({ port: 8080 }, () =>
        console.log(
          `Server ready at http://localhost:8080${server.graphqlPath}`,
        ),
      );
    })
    .catch((error) => console.log(error));
};

startServer();