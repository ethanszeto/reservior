import Authorize from "../auth/authorization.js";
import { PersonCreate, PersonResponse } from "../models/api_models/people.js";
import { ErrorValidation } from "../errors/http_error.js";
import { ErrorInternalAPIModelValidation } from "../errors/internal_error.js";
import PeopleAccessor from "../db_accessors/people.js";

export default class PeopleController {
  static async createPerson(req, res) {
    try {
      const username = Authorize.getCurrentUser(req, res);
      req.body.user = username;
      //check if person name already exists for user
      const personCreate = new PersonCreate(req.body);
      const dbPerson = await PeopleAccessor.createPerson(personCreate);
      const personResponse = new PersonResponse(dbPerson.toObject());
      res.status(201).json(personResponse);
    } catch (e) {
      if (e instanceof ErrorInternalAPIModelValidation) {
        ErrorValidation.throwHttp(req, res, e.message);
      } else {
        console.log(e);
        throw e;
      }
    }
  }

  static async getPeopleMe(req, res) {
    try {
      const username = Authorize.getCurrentUser(req, res);
      const dbPeople = await PeopleAccessor.getPeopleByUser(username);
      const peopleResponses = dbPeople.map((dbPerson) => new PersonResponse(dbPerson.toObject()));
      res.status(200).json(peopleResponses);
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
