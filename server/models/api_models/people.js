import { BaseModel, BaseModelUpdate, object, string, date, now } from "./base_model.js";

export class PersonCreate extends BaseModel {
  static schema = {
    name: { type: string, required: true },
    user: { type: string, required: true },
    creationTime: { type: date, default: now, override: true },
    modificationTime: { type: date, default: now, override: true },
  };
  constructor(json) {
    super(json, PersonCreate.schema);
  }
}

export class PersonResponse extends BaseModel {
  static schema = {
    _id: { type: object, required: true },
    name: { type: string, required: true },
    user: { type: string, required: true },
    creationTime: { type: date, required: true },
    modificationTime: { type: date, required: true },
  };
  constructor(json) {
    super(json, PersonResponse.schema);
  }
}

export class PersonUpdate extends BaseModelUpdate {
  static schema = {
    name: { type: string },
    modificationTime: { type: date, default: now, override: true },
  };
  constructor(json) {
    super(json, PersonUpdate.schema);
  }
}

export class PersonDelete extends BaseModel {
  static schema = {
    name: { type: string, required: true },
    user: { type: string, required: true },
  };
  constructor(json) {
    super(json, PersonDelete.schema);
  }
}
