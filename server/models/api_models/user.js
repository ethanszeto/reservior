import { BaseModel, number, string, date } from "./base_model.js";

export class UserCreate extends BaseModel {
  static schema = {
    firstName: { type: string, required: true },
    lastName: { type: string, required: true },
    username: { type: string, required: true },
    password: { type: string, required: true },
    creationTime: { type: date, default: Date.now(), override: true },
    modificationTime: { type: date, default: Date.now(), override: true },
  };
}
