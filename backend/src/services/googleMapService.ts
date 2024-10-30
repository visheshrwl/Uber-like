import axios from 'axios';
import Redis from 'ioredis';

const redis = new Redis();
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

/**
 * Fetch optimized route from Google Maps API with caching.
 * @param {Object} start - Start coordinates.
 * @param {Object} end - End coordinates.
 * @returns {Promise<Object>} - The optimized route and ETA.
 */
export const fetchOptimizedRoute = async (start, end) => {
  const cacheKey = `route:${start.lat},${start.lng}:${end.lat},${end.lng}`;

  try {
    const cachedResult = await redis.get(cacheKey);
    if (cachedResult) {
      return JSON.parse(cachedResult);
    }

    I;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${start.lat},${start.lng}&destination=${end.lat},${end.lng}&key=${GOOGLE_MAPS_API_KEY}`,
    );

    if (response.data.routes.length === 0) {
      console.warn('No route found for the provided coordinates:', {
        start,
        end,
      });
      throw new Error('No route found');
    }

    const route = response.data.routes[0];
    const eta = Math.ceil(route.legs[0].duration.value / 60); // ETA in minutes

    await redis.set(
      cacheKey,
      JSON.stringify({ optimizedRoute: route, eta }),
      'EX',
      3600,
    );

    return {
      optimizedRoute: route,
      eta,
    };
  } catch (error: any) {
    if (error instanceof axios.AxiosError) {
      console.error('Error making request to Google Maps API:', {
        message: error.message,
        config: error.config,
        response: error.response
          ? {
              status: error.response.status,
              data: error.response.data,
            }
          : null,
      });
      throw new Error('Failed to fetch data from Google Maps API');
    }

    if (error.message.includes('Redis')) {
      console.error('Redis error:', {
        message: error.message,
        stack: error.stack,
      });
    }

    throw error;
  }
};
