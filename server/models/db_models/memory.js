import mongoose from "mongoose";
import UserSchema from "../db_models/user.js";
import LocationSchema from "../db_models/location.js";
import PeopleSchema from "../db_models/people.js";
import { SectionType } from "../enums/enums";

const Schema = mongoose.Schema;

const MemorySchema = new Schema(
  {
    times: [{ type: String }],
    user: { type: Schema.Types.ObjectId, ref: UserSchema },
    locations: [{ type: Schema.Types.ObjectId, ref: LocationSchema }],
    sections: [
      {
        text: { type: String, default: "", required: true },
        sectionType: { type: String, enum: SectionType.listr() },
        people: [{ type: Schema.Types.ObjectId, ref: PeopleSchema }],
      },
    ],
    creationTime: { type: Date, required: true },
    modificationTime: { type: Date, required: true },
  },
  {
    collection: "memories",
  }
);

const db = mongoose.connection.useDb("reservior");
const Memory = db.model("Memories", MemorySchema);

export default Memory;
