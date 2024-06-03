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

  test("Test create location, brussels --> lysander", async () => {
    const response = await request(app)
      .post("/location/add")
      .send(validLocationCreateBrussels)
      .set("Cookie", [`token=${lysanderLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(201);
  });

  test("Test invalid create location, bad type", async () => {
    const response = await request(app)
      .post("/location/add")
      .send(invalidLocationCreateBadType)
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(400);
  });

  test("Test invalid create location, missing field", async () => {
    const response = await request(app)
      .post("/location/add")
      .send(invalidLocationCreateMissingField)
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(400);
  });

  test("Test get all locations, abbot", async () => {
    const response = await request(app)
      .get("/location/me")
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(200);
  });

  test("Test get all locations, lysander", async () => {
    const response = await request(app)
      .get("/location/me")
      .set("Cookie", [`token=${lysanderLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(200);
  });

  test("Test get all locations, reginald", async () => {
    const response = await request(app)
      .get("/location/me")
      .set("Cookie", [`token=${reginaldLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(200);
  });

  test("Test get locations country, abbotwells", async () => {
    const response = await request(app)
      .get("/location/me/country")
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(200);
  });

  test("Test get locations restaurant, abbotwells", async () => {
    const response = await request(app)
      .get("/location/me/restaurant")
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(200);
  });

  test("Test get locations landmark, lysander", async () => {
    const response = await request(app)
      .get("/location/me/landmark")
      .set("Cookie", [`token=${lysanderLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(200);
  });

  test("Test invalid get locations, abbot", async () => {
    const response = await request(app)
      .get("/location/me/random")
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.location ? console.log(response.body) : null;
    expect(response.statusCode).toBe(200);
  });
});
