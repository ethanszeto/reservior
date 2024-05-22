import request from "supertest";
import app from "../../../server/server.js";
import Connection from "../../../server/db/connection.js";
import { abbotLoginToken, lysanderLoginToken, reginaldLoginToken, invalidLoginToken } from "../../test_data/token.js";
import {
  validLocationCreateAmsterdam,
  validLocationCreateBrussels,
  invalidLocationCreateBadType,
  invalidLocationCreateMissingField,
} from "../../test_data/location.js";

describe("Location tests", () => {
  test("Test create location, amsterdam --> abbot", async () => {
    const response = await request(app)
      .post("/location/add")
      .send(validLocationCreateAmsterdam)
      .set("Cookie", [`token=${abbotLoginToken}`]);
    await Connection.close();
    console.log(response.body);
    expect(response.statusCode).toBe(201);
  });
});
