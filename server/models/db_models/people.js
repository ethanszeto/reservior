import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PeopleSchema = new Schema(
  {
    name: { type: String, required: true },
    creationTime: { type: Date, required: true },
    modificationTime: { type: Date, required: true },
  },
  {
    collection: "people",
  }
);

const db = mongoose.connection.useDb("reservior");
const People = db.model("People", PeopleSchema);

export default People;
