const express = require('express');
const axios = require('axios');
const router = express.Router();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY; // Make sure to add this to your .env file

router.post('/optimize-route', async (req, res) => {
  const { start, end } = req.body;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${start.lat},${start.lng}&destination=${end.lat},${end.lng}&key=${GOOGLE_MAPS_API_KEY}`
    );

    if (response.data.routes.length === 0) {
      return res.status(404).json({ error: 'No route found' });
    }

    const route = response.data.routes[0];
    const eta = Math.ceil(route.legs[0].duration.value / 60); // ETA in minutes

    res.json({
      optimizedRoute: route,
      eta,
    });
  } catch (error) {
    console.error('Error fetching route:', error);
    res.status(500).json({ error: 'Failed to fetch optimized route' });
  }
});

module.exports = router;
