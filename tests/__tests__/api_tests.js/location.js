import request from "supertest";
import app from "../../../server/server.js";
import Connection from "../../../server/db/connection.js";
import logTestSuite from "../../util.js";
import { abbotLoginToken, lysanderLoginToken, reginaldLoginToken, invalidLoginToken } from "../../test_data/token.js";
import {
  validLocationCreateAmsterdam,
  validLocationCreateBrussels,
  invalidLocationCreateBadType,
  invalidLocationCreateMissingField,
} from "../../test_data/location.js";

afterAll(async () => {
  await Connection.close();
});

describe("Location tests", () => {
  test("Test create location, amsterdam --> abbot", async () => {
    const response = await request(app)
      .post("/location/add")
      .send(validLocationCreateAmsterdam)
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(201);
  });

  test("Test get all locations, abbot", async () => {
    const response = await request(app)
      .get("/location/me")
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(200);
  });
});
