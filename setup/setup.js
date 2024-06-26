import UserSchema from "../server/models/db_models/user.js";
import PeopleSchema from "../server/models/db_models/people.js";
import LocationSchema from "../server/models/db_models/location.js";
import MemorySchema from "../server/models/db_models/memory.js";
import userSeed from "./seed/user.js";
import peopleSeed from "./seed/people.js";
import locationSeed from "./seed/location.js";
import memorySeed from "./seed/memory.js";

export default [
  { schema: UserSchema, seed: userSeed },
  { schema: PeopleSchema, seed: peopleSeed },
  { schema: LocationSchema, seed: locationSeed },
  { schema: MemorySchema, seed: memorySeed },
];
