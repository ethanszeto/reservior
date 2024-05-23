import { BaseModel, string } from "../api_models/base_model.js";

export class MemoryCreate extends BaseModel {
  static schema = {
    time: { type: [string], required: true },
    locations: { type: [string], required: true },
  };
}
