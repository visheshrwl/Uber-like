
const express = require('express');
const router = express.Router();
const { calculateRoute } = require('../services/routingService'); // A service to calculate routes

router.post('/optimize-route', async (req, res) => {
  const { start, end } = req.body;

  try {
    const optimizedRoute = await calculateRoute(start, end);
    res.json(optimizedRoute);
  } catch (error) {
    console.error("Error calculating route:", error);
    res.status(500).send("Error calculating route");
  }
});

module.exports = router;
