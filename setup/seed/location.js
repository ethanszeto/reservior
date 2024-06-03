import mongoose from "mongoose";

export default [
  {
    _id: new mongoose.Types.ObjectId("700000000000000000000000"),
    location: "Cornwall, England",
    locationTypes: ["country", "city"],
    user: "abbotwells",
    creationTime: new Date("2024-04-04"),
    modificationTime: new Date("2024-04-04"),
  },
  {
    _id: new mongoose.Types.ObjectId("800000000000000000000000"),
    location: "Pizza Union, Spitalfields",
    locationTypes: ["restaurant", "neighborhood", "area"],
    user: "abbotwells",
    creationTime: new Date("2024-04-04"),
    modificationTime: new Date("2024-04-04"),
  },
  {
    _id: new mongoose.Types.ObjectId("900000000000000000000000"),
    location: "London Bridge",
    locationTypes: ["landmark"],
    user: "abbotwells",
    creationTime: new Date("2024-04-04"),
    modificationTime: new Date("2024-04-04"),
  },
  {
    _id: new mongoose.Types.ObjectId("a00000000000000000000000"),
    location: "Hadrian's Wall",
    locationTypes: ["landmark", "area"],
    user: "lysfitz",
    creationTime: new Date("2024-04-04"),
    modificationTime: new Date("2024-04-04"),
  },
  {
    _id: new mongoose.Types.ObjectId("b00000000000000000000000"),
    location: "Fitzwilliam Museum, Cambridge",
    locationTypes: ["landmark", "building"],
    user: "lysfitz",
    creationTime: new Date("2024-04-04"),
    modificationTime: new Date("2024-04-04"),
  },
  {
    _id: new mongoose.Types.ObjectId("c00000000000000000000000"),
    location: "Iceland",
    locationTypes: ["country"],
    user: "regwind",
    creationTime: new Date("2024-03-03"),
    modificationTime: new Date("2024-03-03"),
  },
];
