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
