import Connection from "../db/connection.js";
import Location from "../models/db_models/location.js";

export default class LocationAccessor {
  static async createLocation(locationCreate) {
    try {
      await Connection.open();
      const dbLocation = await Location.create(locationCreate);
      return dbLocation;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
