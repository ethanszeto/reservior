import LocationAccessor from "../db_accessors/location.js";
import { LocationCreate, LocationResponse } from "../models/api_models/location.js";

export default class LocationController {
  static async createLocation(req, res) {
    try {
      const username = Authorize.getCurrentUser(req, res);
      req.body.user = username;
      const locationCreate = new LocationCreate(req.body);
      const dbLocation = await LocationAccessor.createLocation(locationCreate);
      const location = new LocationResponse(dbLocation.toObject);
      return location;
    } catch (e) {
      if (e instanceof ErrorInternalAPIModelValidation) {
        ErrorValidation.throwHttp(req, res, e.message);
      } else {
        console.log(e);
        throw e;
      }
    }
  }
}
