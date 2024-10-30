import express from 'express';
import { z } from 'zod';
import { fetchOptimizedRoute } from './googleMapService';

const router = express.Router();

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
    routeSchema.parse(req.body);

    const { start, end } = req.body;

    const { optimizedRoute, eta } = await fetchOptimizedRoute(start, end);

    res.json({
      optimizedRoute,
      eta,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
      return res
        .status(400)
        .json({ error: 'Invalid input', details: error.errors });
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
