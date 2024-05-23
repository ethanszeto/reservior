import Connection from "../db/connection.js";
import { ErrorDatabaseConnection, ErrorInternalDatabaseAccessor } from "../errors/internal_error.js";
import Location from "../models/db_models/location.js";

export default class LocationAccessor {
  static async createLocation(locationCreate) {
    try {
      await Connection.open();
      const dbLocation = await Location.create(locationCreate);
      return dbLocation;
    } catch (e) {
      if (e instanceof ErrorDatabaseConnection) {
        throw e;
      } else {
        throw new ErrorInternalDatabaseAccessor(e);
      }
    }
  }

  static async getAllLocationsByUsername(username) {
    try {
      await Connection.open();
      const dbLocations = await Location.find({ user: username });
      return dbLocations;
    } catch (e) {
      if (e instanceof ErrorDatabaseConnection) {
        throw e;
      } else {
        throw new ErrorInternalDatabaseAccessor(e);
      }
    }
  }
}
