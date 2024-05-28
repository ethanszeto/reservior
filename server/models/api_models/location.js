import { BaseModel, string, date, now, object, BaseModelUpdate } from "./base_model.js";
import { LocationType } from "../enums/enums.js";

export class LocationCreate extends BaseModel {
  static schema = {
    location: { type: string, required: true },
    locationTypes: { type: [string], enum: LocationType.listr() },
    user: { type: string, required: true },
    creationTime: { type: date, default: now, override: true },
    modificationTime: { type: date, default: now, override: true },
  };
  constructor(json) {
    super(json, LocationCreate.schema);
  }
}

export class LocationResponse extends BaseModel {
  static schema = {
    _id: { type: object },
    location: { type: string, required: true },
    locationTypes: { type: [string], enum: LocationType.listr() },
    user: { type: string, required: true },
    creationTime: { type: date, required: true },
    modificationTime: { type: date, required: true },
  };
  constructor(json) {
    super(json, LocationResponse.schema);
  }
}

export class LocationUpdate extends BaseModelUpdate {
  static schema = {
    location: { type: string },
    locationTypes: { type: [string], enum: LocationType.listr() },
    modificationTime: { type: date, default: now, override: true },
  };
  constructor(json) {
    super(json, LocationResponse.schema);
  }
}

export class LocationDelete extends BaseModel {
  static schema = {
    location: { type: string, required: true },
    user: { type: string, required: true },
  };
  constructor(json) {
    super(json, LocationDelete.schema);
  }
}
