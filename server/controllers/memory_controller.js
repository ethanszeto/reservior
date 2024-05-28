import Authorize from "../auth/authorization.js";
import MemoryAccessor from "../db_accessors/memory.js";
import PeopleAccessor from "../db_accessors/people.js";
import { MemoryCreate, MemoryCreateInternal, MemoryResponse } from "../models/api_models/memory.js";
import { ErrorInternalAPIModelValidation } from "../errors/internal_error.js";
import { ErrorValidation, ErrorUnexpected } from "../errors/http_error.js";

export default class MemoryController {
  /**
   *
   * @param {MemoryCreate} memoryCreate
   */
  static async convertMemoryToInternalMemory(memoryCreate) {
    // location names
    for (const location of memoryCreate.locations) {
    }

    // people name
    for (const section of memoryCreate.sections) {
      /* Interesting phenomenon here!

      I have the option to find all people by user, and thus force
      myself into an O(n^2) solution, however with only 1 database call,
      or I can iterate once, but make n many database calls. Which is better?
      
      */
      PeopleAccessor.getPeopleByUserAndName();
    }
  }

  static async createMemory(req, res) {
    try {
      const username = Authorize.getCurrentUser(req, res);
      req.body.user = username;

      const memoryCreate = new MemoryCreate(req.body);

      const dbMemory = await MemoryAccessor.createMemory(memoryCreate);
    } catch (e) {
      if (e instanceof ErrorInternalAPIModelValidation) {
        ErrorValidation.throwHttp(req, res, e.message);
      } else {
        ErrorUnexpected.throwHttp(req, res, e.message);
      }
    }
  }

  static async getMemoriesMe(req, res) {}
  static async updateMemoryById(req, res) {}
  static async getMemoriesMeByLocationId(req, res) {}
  static async getMemoriesMeByPerson(req, res) {}
  static async getFactsByPerson(req, res) {}
  static async getAnecdotesByPerson(req, res) {}
}
