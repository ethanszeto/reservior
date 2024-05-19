import mongoose from "mongoose";
import { LocationType } from "../enums/enums";

const Schema = mongoose.Schema;

const LocationSchema = new Schema(
  {
    location: { type: String, required: true },
    locationTypes: [{ type: String, enum: LocationType.listr() }],
    creationTime: { type: Date, required: true },
    modificationTime: { type: Date, required: true },
  },
  {
    collection: "locations",
  }
);

const db = mongoose.connection.useDb("reservior");
const Location = db.model("Locations", LocationSchema);

export default Location;
