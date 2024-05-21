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

  /**
   * Get a user in the database by username
   *
   * @param {String} username
   */
  static async getUserByUsername(username) {
    try {
      await Connection.open();
      const user = await User.findOne({ username: username });
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
