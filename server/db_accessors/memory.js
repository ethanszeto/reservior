import Connection from "../db/connection";
import Memory from "../models/db_models/memory.js";
import mongoose from "mongoose";
import { ErrorDatabaseConnection, ErrorInternalDatabaseAccessor } from "../errors/internal_error.js";

export default class MemoryAccessor {
  static async createMemory(memoryCreate) {
    try {
      await Connection.open();
      const dbMemory = await Memory.create(memoryCreate);
      return dbMemory;
    } catch (e) {
      if (e instanceof ErrorDatabaseConnection) {
        throw e;
      } else {
        throw new ErrorInternalDatabaseAccessor(e);
      }
    }
  }

  static async getMemoryById(objectId) {
    try {
      await Connection.open();
      const dbMemory = await Memory.findById(objectId).populate("user").populate("locations").populate("sections.people").exec();
      return dbMemory;
    } catch (e) {
      if (e instanceof ErrorDatabaseConnection) {
        throw e;
      } else {
        throw new ErrorInternalDatabaseAccessor(e);
      }
    }
  }

  static async getMemoriesByUserId(userId) {
    try {
      await Connection.open();
      const dbMemories = await Memory.find({ user: userId })
        .populate("user")
        .populate("locations")
        .populate("sections.people")
        .exec();
      return dbMemories;
    } catch (e) {
      if (e instanceof ErrorDatabaseConnection) {
        throw e;
      } else {
        throw new ErrorInternalDatabaseAccessor(e);
      }
    }
  }
}
