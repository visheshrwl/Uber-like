import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Trip } from "../entity/Trip";

@Resolver()
export class TripResolver {
  @Query(() => [Trip])
  async trips() {
    return Trip.find();
  }

  @Mutation(() => Trip)
  async createTrip(@Arg("origin") origin: string, @Arg("destination") destination: string) {
    const trip = new Trip();
    trip.origin = origin;
    trip.destination = destination;
    await trip.save();
    return trip;
  }
}
