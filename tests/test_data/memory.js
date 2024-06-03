import mongoose from "mongoose";
import { SectionType } from "../../server/models/enums/enums";

export const validCreateMemoryAbbot = {
  times: ["Early evening"],
  user: new mongoose.Types.ObjectId("000000000000000000000000"),
  locations: [new mongoose.Types.ObjectId("800000000000000000000000"), new mongoose.Types.ObjectId("900000000000000000000000")],
  sections: [
    {
      text: "I spent my time walking around London after eating at Pizza Union.",
      sectionType: "anecdote",
      people: [new mongoose.Types.ObjectId("300000000000000000000000"), new mongoose.Types.ObjectId("400000000000000000000000")],
    },
    {
      text: "Hadrian Stills was named after Hadrian's wall.",
      sectionType: "fact",
      people: [new mongoose.Types.ObjectId("400000000000000000000000")],
    },
  ],
};
