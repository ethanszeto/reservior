import UserSchema from "../server/models/db_models/user.js";
import PeopleSchema from "../server/models/db_models/people.js";
import userSeed from "./seed/user.js";
import peopleSeed from "./seed/people.js";

export default [
  { schema: UserSchema, seed: userSeed },
  { schema: PeopleSchema, seed: peopleSeed },
];
