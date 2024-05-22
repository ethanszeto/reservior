import Authorize from "../auth/authorization.js";
import LocationAccessor from "../db_accessors/location.js";
import { LocationCreate, LocationResponse } from "../models/api_models/location.js";
import { ErrorInternalAPIModelValidation } from "../errors/internal_error.js";
import { ErrorValidation } from "../errors/http_error.js";

export default class LocationController {
  static async createLocation(req, res) {
    try {
      const username = Authorize.getCurrentUser(req, res);
      req.body.user = username;
      const locationCreate = new LocationCreate(req.body);
      const dbLocation = await LocationAccessor.createLocation(locationCreate);
      const locationResponse = new LocationResponse(dbLocation.toObject());
      res.status(201).json(locationResponse);
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
