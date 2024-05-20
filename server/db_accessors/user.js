import Connection from "../db/connection.js";
import User from "../models/db_models/user.js";

export default class UserAccessor {
  /**
   * Create a new user in the database
   *
   * @param {UserCreate} userCreate
   */
  static async createUser(userCreate) {
    try {
      await Connection.open();
      const user = await User.create(userCreate);
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
