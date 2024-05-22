import BaseEnum from "../enums/base_enum.js";

export class LocationType extends BaseEnum {
  static country = new LocationType("country");
  static state = new LocationType("state");
  static city = new LocationType("city");
  static street = new LocationType("street");
  static neighborhood = new LocationType("neighborhood");
  static area = new LocationType("area");
  static restaurant = new LocationType("restaurant");
  static building = new LocationType("building");
  static landmark = new LocationType("landmark");
  static misc = new LocationType("misc");
}

export class SectionType extends BaseEnum {
  static anecdote = new SectionType("anecdote");
  static fact = new SectionType("fact");
}
