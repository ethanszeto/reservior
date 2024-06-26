import { config as dotenvConfig } from "dotenv";
import mongoose from "mongoose"; // import mongoose
import logActivity from "./log_activity.js";
import { ErrorDatabaseConnection } from "../errors/internal_error.js";

//Connection to the cluster
let connection;

/**
 * Connection Class
 *
 * This class controls connections to the MongoDB Cluster.
 *
 */
export default class Connection {
  /**
   * open Method
   *
   * Establishes a connection to the given database within
   * the cluster.
   *
   * Static - no instance required.
   * Async - promises to return the correct data.
   *
   * @returns the connection object
   */
  static async open() {
    try {
      if (!connection) {
        //Load Environment variables
        dotenvConfig();

        //Destructure env variables
        const { MONGODB_INITDB_ROOT_USERNAME, MONGODB_INITDB_ROOT_PASSWORD, MONGODB_INITDB_PORT, MONGODB_INITDB_HOSTNAME } =
          process.env;
        const DATABASE_URL = `mongodb://${MONGODB_INITDB_ROOT_USERNAME}:${MONGODB_INITDB_ROOT_PASSWORD}@${MONGODB_INITDB_HOSTNAME}:${MONGODB_INITDB_PORT}`;
        //Mongoose connect to the cluster.
        await mongoose.connect(DATABASE_URL, {
          maxPoolSize: 50,
          socketTimeoutMS: 2500,
          autoIndex: true,
        });

        connection = mongoose.connection;

        //Log when open/closed
        logActivity(mongoose.connection);

        return mongoose.connection;
      } else {
        return connection;
      }
    } catch (e) {
      throw new ErrorDatabaseConnection(e);
    }
  }

  /**
   * close Method
   *
   * This method closes the given MongoDB connection.
   *
   * Static - no instance required.
   * Async - promises to return the correct data.
   *
   * @param {MongoDB Connection} connection The given connection.
   */
  static async close() {
    if (connection) {
      await connection.close();
      logActivity(connection);
      connection = undefined;
    }
  }
}
