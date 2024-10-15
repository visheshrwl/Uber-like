import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Trip } from '../entity/Ride';
import axios from 'axios';
import { validateOrReject, IsNotEmpty, Length } from 'class-validator';
import sanitizeHtml from 'sanitize-html';

class TripInput {
  @IsNotEmpty()
  @Length(5, 100)
  origin!: string;

  @IsNotEmpty()
  @Length(5, 100)
  destination!: string;
}

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
    // Sanitize inputs
    origin = sanitizeHtml(origin);
    destination = sanitizeHtml(destination);

    const tripInput = new TripInput();
    tripInput.origin = origin;
    tripInput.destination = destination;

    // Validate inputs
    await validateOrReject(tripInput);

    const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY!;
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