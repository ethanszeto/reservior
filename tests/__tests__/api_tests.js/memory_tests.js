import util from "util";
import request from "supertest";
import app from "../../../server/server.js";
import Connection from "../../../server/db/connection.js";
import logTestSuite from "../../util.js";
import {
  validCreateMemoryAbbot,
  validUpdateAddSectionMemoryAbbot,
  validUpdateAddTimeMemoryAbbot,
} from "../../test_data/memory.js";
import { abbotLoginToken, lysanderLoginToken, reginaldLoginToken, invalidLoginToken } from "../../test_data/token.js";

afterAll(async () => {
  await Connection.close();
});

describe("Memory tests", () => {
  test("Test create memory, abbot", async () => {
    const response = await request(app)
      .post("/memory/add")
      .send(validCreateMemoryAbbot)
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.memory ? console.log(util.inspect(response.body, false, null)) : null;
    expect(response.statusCode).toBe(201);
  });

  test("Test get memories me, abbot", async () => {
    const response = await request(app)
      .get("/memory/me")
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.memory ? console.log(util.inspect(response.body, false, null)) : null;
    expect(response.statusCode).toBe(200);
  });

  test("Test update memories me, update (add) time, abbot", async () => {
    const response = await request(app)
      .patch("/memory/me/update/d00000000000000000000000")
      .send(validUpdateAddTimeMemoryAbbot)
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.memory ? console.log(util.inspect(response.body, false, null)) : null;
    expect(response.statusCode).toBe(204);
  });

  test("Test update memories me, update (add) section, abbot", async () => {
    const response = await request(app)
      .patch("/memory/me/update/d00000000000000000000000")
      .send(validUpdateAddSectionMemoryAbbot)
      .set("Cookie", [`token=${abbotLoginToken}`]);
    logTestSuite.memory ? console.log(util.inspect(response.body, false, null)) : null;
    expect(response.statusCode).toBe(204);
  });
});
