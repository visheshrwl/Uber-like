import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Trip } from '../entity/Ride';
import axios from 'axios';

@Resolver()
export class TripResolver {
  @Query(() => [Trip])
  async trips() {
    return Trip.find();
  }

  @Mutation(() => Trip)
  async createTrip(
    @Arg('origin') origin: string,
    @Arg('destination') destination: string,
  ) {
    const googleMapsApiKey = '1274d7780f57033ed9118ea96db99182';
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&departure_time=now&key=${googleMapsApiKey}&traffic_model=best_guess`;

    let routeData;
    try {
      const response = await axios.get(url);
      routeData = response.data;
    } catch (error) {
      console.error('Error fetching traffic data:', error);
      throw new Error('Failed to get real-time traffic data');
    }

    const route = routeData.routes[0];
    const trafficDuration = route.legs[0].duration_in_traffic.text;
    const distance = route.legs[0].distance.text;

    const trip = new Trip();
    trip.origin = origin;
    trip.destination = destination;
    trip.trafficDuration = trafficDuration;
    trip.distance = distance;
    await trip.save();

    return trip;
  }
}
