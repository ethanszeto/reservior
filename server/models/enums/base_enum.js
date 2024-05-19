class BaseEnum {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value;
  }

  list() {
    return Object.values(this);
  }

  listr() {
    return Object.values(this).map((e) => e.toString());
  }

  toEnum(str) {
    return (
      this.list().find((e) => e.toString() === str) ??
      (() => {
        throw new ErrorInternalEnumValidation(`'${str}' not a valid ${this.name}`);
      })()
    );
  }
}
