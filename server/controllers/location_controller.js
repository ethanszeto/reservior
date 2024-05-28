import Authorize from "../auth/authorization.js";
import LocationAccessor from "../db_accessors/location.js";
import { LocationCreate, LocationResponse } from "../models/api_models/location.js";
import { ErrorInternalAPIModelValidation } from "../errors/internal_error.js";
import { ErrorUnexpected, ErrorValidation } from "../errors/http_error.js";

export default class LocationController {
  static async createLocation(req, res) {
    try {
      const username = Authorize.getCurrentUser(req, res);
      req.body.user = username;
      const locationCreate = new LocationCreate(req.body);
      const dbLocation = await LocationAccessor.createLocation(locationCreate);
      console.log(dbLocation);
      const locationResponse = new LocationResponse(dbLocation.toObject());
      res.status(201).json(locationResponse);
    } catch (e) {
      if (e instanceof ErrorInternalAPIModelValidation) {
        ErrorValidation.throwHttp(req, res, e.message);
      } else {
        ErrorUnexpected.throwHttp(req, res, e.message);
      }
    }
  }

  static async getAllLocationsMe(req, res) {
    try {
      const username = Authorize.getCurrentUser(req, res);
      const dbLocations = await LocationAccessor.getAllLocationsByUsername(username);
      const locations = dbLocations.map((dbLocation) => new LocationResponse(dbLocation.toObject()));
      res.status(200).json(locations);
    } catch (e) {
      if (e instanceof ErrorInternalAPIModelValidation) {
        ErrorValidation.throwHttp(req, res, e.message);
      } else {
        ErrorUnexpected.throwHttp(req, res, e.message);
      }
    }
  }

  static async getLocationsMeByType(req, res) {
    try {
      const username = Authorize.getCurrentUser(req, res);
      const dbLocations = await LocationAccessor.getAllLocationsByUsernameAndType(username, req.params.type);
      const locations = dbLocations.map((dbLocation) => new LocationResponse(dbLocation.toObject()));
      res.status(200).json(locations);
    } catch (e) {
      if (e instanceof ErrorInternalAPIModelValidation) {
        ErrorValidation.throwHttp(req, res, e.message);
      } else {
        ErrorUnexpected.throwHttp(req, res, e.message);
      }
    }
  }
}
