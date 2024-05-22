export default class BaseEnum {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value;
  }

  static list() {
    return Object.values(this);
  }

  static listr() {
    return Object.values(this).map((e) => e.toString());
  }

  static toEnum(str) {
    return (
      this.list().find((e) => e.toString() === str) ??
      (() => {
        throw new ErrorInternalEnumValidation(`'${str}' not a valid ${this.name}`);
      })()
    );
  }
}
