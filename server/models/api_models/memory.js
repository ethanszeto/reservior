import { SectionType } from "../enums/enums.js";
import { BaseModel, string, date, now, object, BaseModelUpdate } from "../api_models/base_model.js";

export class MemoryCreate extends BaseModel {
  static schema = {
    times: { type: [string], required: true },
    user: { type: string, required: true },
    locations: { type: [string], required: true },
    sections: {
      type: [
        {
          text: { type: string, default: "" },
          sectionType: { type: string, enum: SectionType.listr() },
          people: { type: [string] },
        },
      ],
    },
    creationTime: { type: date, default: now, override: true },
    modificationTime: { type: date, default: now, override: true },
  };
  constructor(json) {
    super(json, MemoryCreate.schema);
  }
}

export class MemoryCreateInternal extends BaseModel {
  static schema = {
    times: { type: [string], required: true },
    user: { type: object, required: true },
    locations: { type: [string], required: true },
    sections: {
      type: [
        {
          text: { type: string, default: "" },
          sectionType: { type: string, enum: SectionType.listr() },
          people: { type: [object] },
        },
      ],
    },
    creationTime: { type: date, required: true },
    modificationTime: { type: date, required: true },
  };
  constructor(json) {
    super(json, MemoryCreateInternal.schema);
  }
}

export class MemoryResponse extends BaseModel {
  static schema = {
    _id: { type: object, required: true },
    times: { type: [string], required: true },
    locations: { type: [object], required: true },
    sections: {
      type: [
        {
          _id: { type: object, required: true },
          text: { type: string, default: "" },
          sectionType: { type: string, enum: SectionType.listr() },
          people: { type: [object] },
        },
      ],
    },
    creationTime: { type: date, required: true },
    modificationTime: { type: date, required: true },
  };
  constructor(json) {
    super(json, MemoryResponse.schema);
  }
}

export class MemoryUpdate extends BaseModelUpdate {
  static schema = {
    times: { type: [string] },
    locations: { type: [string] },
    sections: {
      type: [
        {
          text: { type: string, default: "" },
          sectionType: { type: string, enum: SectionType.listr() },
          people: { type: [object] },
        },
      ],
    },
    modificationTime: { type: date, default: now, override: true },
  };
  constructor(json) {
    super(json, MemoryUpdate.schema);
  }
}

export class MemoryDelete extends BaseModel {
  static schema = {
    times: { type: [string], required: true },
    user: { type: string, required: true },
    locations: { type: [string], required: true },
  };
  constructor(json) {
    super(json, MemoryDelete.schema);
  }
}
