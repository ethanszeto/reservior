import UserSchema from "../server/models/db_models/user.js";
import userSeed from "./seed/user.js";

export default [
  {
    schema: UserSchema,
    seed: userSeed,
  },
];
