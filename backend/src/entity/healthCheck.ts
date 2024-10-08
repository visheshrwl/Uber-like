const mongoose = require('mongoose');
const redis = require('redis');
const packageJson = require('../package.json'); 

const redisClient = redis.createClient();

const checkHealth = async () => {
  const healthStatus = {
    status: 'healthy',
    version: packageJson.version,
    uptime: process.uptime(),
    dependencies: {
      database: 'unknown',
      cache: 'unknown',
    },
  };

  try {
    if (mongoose.connection.readyState === 1) {
      healthStatus.dependencies.database = 'healthy';
    } else {
      healthStatus.dependencies.database = 'unhealthy';
      healthStatus.status = 'unhealthy';
    }
    const redisHealth = await redisClient.ping();
    if (redisHealth === 'PONG') {
      healthStatus.dependencies.cache = 'healthy';
    } else {
      healthStatus.dependencies.cache = 'unhealthy';
      healthStatus.status = 'unhealthy';
    }
  } catch (error) {
    healthStatus.status = 'unhealthy';
    healthStatus.error = error.message;
  }

  return healthStatus;
};

module.exports = { checkHealth };
