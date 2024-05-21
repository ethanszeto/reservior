import { BaseModel, BaseModelUpdate, string, date, now } from "./base_model.js";

export class UserCreate extends BaseModel {
  static schema = {
    firstName: { type: string, required: true },
    lastName: { type: string, required: true },
    username: { type: string, required: true },
    password: { type: string, required: true },
    creationTime: { type: date, default: now, override: true },
    modificationTime: { type: date, default: now, override: true },
  };
  constructor(json) {
    super(json, UserCreate.schema);
  }
}

export class UserResponse extends BaseModel {
  static schema = {
    firstName: { type: string, required: true },
    lastName: { type: string, required: true },
    username: { type: string, required: true },
    creationTime: { type: date, required: true },
    modificationTime: { type: date, required: true },
  };
  constructor(json) {
    super(json, UserResponse.schema);
  }
}

export class UserUpdate extends BaseModelUpdate {
  static schema = {
    firstName: { type: string },
    lastName: { type: string },
    password: { type: string },
    modificationTime: { type: date, default: now, override: true },
  };
  constructor(json) {
    super(json, UserUpdate.schema);
  }
}

export class UserLogin extends BaseModel {
  static schema = {
    username: { type: string, required: true },
    password: { type: string, required: true },
  };
  constructor(json) {
    super(json, UserLogin.schema);
  }
}

export class UserDelete extends BaseModel {
  static schema = {
    username: { type: string, required: true },
  };
  constructor(json) {
    super(json, UserDelete.schema);
  }
}
