import mongoose from "mongoose";

export const validCreateMemoryAbbot = {
  times: ["Early evening"],
  user: "abbotwells",
  locations: ["Cornwall, England", "Pizza Union, Spitalfields"],
  sections: [
    {
      text: "I spent my time walking around London after eating at Pizza Union.",
      sectionType: "anecdote",
      people: ["Watkins Evergreen", "Hadrian Stills"],
    },
    {
      text: "Hadrian Stills was named after Hadrian's Wall.",
      sectionType: "fact",
      people: ["Hadrian Stills"],
    },
  ],
};

export const validUpdateAddTimeMemoryAbbot = {
  times: ["Early evening", "Late at night"],
};

export const validUpdateAddSectionMemoryAbbot = {
  sections: [
    {
      text: "I spent time walking around Devon House for the very last time.",
      sectionType: "anecdote",
      people: [new mongoose.Types.ObjectId("300000000000000000000000")],
    },
    {
      text: "Hadrian had a good time talking about his wall.",
      sectionType: "anecdote",
      people: [new mongoose.Types.ObjectId("400000000000000000000000")],
    },
    {
      text: "Great times around the house as well.",
      sectionType: "anecdote",
      people: [new mongoose.Types.ObjectId("300000000000000000000000"), new mongoose.Types.ObjectId("400000000000000000000000")],
    },
  ],
};

export const validUpdateAddLocationMemoryAbbot = {
  locations: [new mongoose.Types.ObjectId("900000000000000000000000"), new mongoose.Types.ObjectId("800000000000000000000000")],
};
