import mongoose from "mongoose";
import { LocationType } from "../enums/enums.js";

const Schema = mongoose.Schema;

const LocationSchema = new Schema(
  {
    location: { type: String, required: true },
    locationTypes: [{ type: String, enum: LocationType.listr() }],
    user: { type: String, required: true },
    creationTime: { type: Date, required: true },
    modificationTime: { type: Date, required: true },
  },
  {
    collection: "locations",
  }
);

LocationSchema.index({ location: 1, user: 1 }, { unique: true });

const db = mongoose.connection.useDb("reservior");
const Location = db.model("Locations", LocationSchema);

export default Location;
