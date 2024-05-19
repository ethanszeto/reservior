import mongoose from "mongoose";
import { SectionType } from "../enums/enums";

const Schema = mongoose.Schema;

const MemorySchema = new Schema(
  {
    times: [{ type: String }],
    locations: [{ type: Schema.Types.ObjectId, ref: "Locations" }],
    sections: [
      {
        text: { type: String, default: "", required: true },
        sectionType: { type: String, enum: SectionType.listr() },
        people: [{ type: Schema.Types.ObjectId, ref: "Users" }],
      },
    ],
    creationTime: { type: Date, required: true },
    modificationTime: { type: Date, required: true },
  },
  {
    collection: "memories",
  }
);
