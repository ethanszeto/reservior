import mongoose from "mongoose";

export default [
  {
    _id: new mongoose.Types.ObjectId("d00000000000000000000000"),
    times: ["A jolly morning in December"],
    user: new mongoose.Types.ObjectId("000000000000000000000000"),
    locations: [new mongoose.Types.ObjectId("900000000000000000000000")],
    sections: [
      {
        text: "I spent time walking around Devon House for the very last time.",
        sectionType: "anecdote",
        people: [new mongoose.Types.ObjectId("300000000000000000000000")],
      },
    ],
    creationTime: new Date("2024-06-01"),
    modificationTime: new Date("2024-06-01"),
  },
];
