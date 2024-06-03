import mongoose from "mongoose";

export default [
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000000"),
    firstName: "Abbot",
    lastName: "Wells",
    username: "abbotwells",
    password: "$2a$10$0pI/sjeL4ZUirGjrmuvgVu1qAOG.T4H25IJp1mLKhsQmiXwWJDSCW", //123
    creationTime: new Date("2024-01-01"),
    modificationTime: new Date("2024-01-01"),
  },
  {
    _id: new mongoose.Types.ObjectId("100000000000000000000000"),
    firstName: "Lysander",
    lastName: "Fitzroy",
    username: "lysfitz",
    password: "$2a$10$3MnxtJPsL319eDHYUgRbbe0nX6D0LM9nKDQfbT71Vzo.kpv9n1MEa", //test
    creationTime: new Date("2024-02-02"),
    modificationTime: new Date("2024-02-02"),
  },
  {
    _id: new mongoose.Types.ObjectId("200000000000000000000000"),
    firstName: "Reginald",
    lastName: "Wyndham",
    username: "regwind",
    password: "$2a$10$0gmgiNx8ijSrP5H./N6AIuT0k4ZV5s1fHaWlKlMp5AZSfivBjraWC", //Test123!
    creationTime: new Date("2024-03-03"),
    modificationTime: new Date("2024-03-03"),
  },
];
