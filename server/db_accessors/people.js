import Connection from "../db/connection.js";
import People from "../models/db_models/people.js";

export default class PeopleAccessor {
  static async createPerson(personCreate) {
    try {
      await Connection.open();
      const person = await People.create(personCreate);
      return person;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async getPeopleByUser(username) {
    try {
      await Connection.open();
      const people = await People.find({ user: username });
      return people;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
