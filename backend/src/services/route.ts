import express from 'express';
import { z } from 'zod';
import { fetchOptimizedRoute } from './googleMapService';
import Redis from 'ioredis';

const router = express.Router();
const redis = new Redis();

const routeSchema = z.object({
  start: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  end: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
});

router.post('/optimize-route', async (req, res) => {
  try {
    // Validate request body against schema
    routeSchema.parse(req.body);

    const { start, end } = req.body;

    // Create a unique cache key based on start and end coordinates
    const cacheKey = `optimized-route:${start.lat},${start.lng}:${end.lat},${end.lng}`;

    // Check if the result is already cached
    const cachedResult = await redis.get(cacheKey);
    if (cachedResult) {
      console.log('Cache hit for key:', cacheKey); // Log cache hit for monitoring
      return res.json(JSON.parse(cachedResult)); // Return cached result
    }

    // Fetch optimized route from the Google Maps service
    const { optimizedRoute, eta } = await fetchOptimizedRoute(start, end);

    // Cache the result with an expiration time of 1 hour
    await redis.set(cacheKey, JSON.stringify({ optimizedRoute, eta }), 'EX', 3600);

    // Send response
    res.json({
      optimizedRoute,
      eta,
    });
  } catch (error : any) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
      return res.status(400).json({ error: 'Invalid input', details: error.errors });
    }

    if (error.message === 'No route found') {
      console.warn('No route found for the provided coordinates:', {
        start,
        end,
      });
      return res.status(404).json({ error: error.message });
    }

    console.error('Error fetching route:', {
      message: error.message,
      stack: error.stack,
      requestBody: req.body,
    });
    res.status(500).json({ error: 'Failed to fetch optimized route' });
  }
});

export default router;
