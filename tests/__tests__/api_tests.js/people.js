import request from "supertest";
import app from "../../../server/server.js";
import Connection from "../../../server/db/connection.js";
import { invalidCreatePerson, validCreatePersonAmy } from "../../test_data/people.js";
import { abbotLoginToken, lysanderLoginToken, reginaldLoginToken, invalidLoginToken } from "../../test_data/token.js";

describe("People tests", () => {
  test("Test create person, Amy --> Abbot", async () => {
    const response = await request(app)
      .post("/people/add")
      .send(validCreatePersonAmy)
      .set("Cookie", [`token=${abbotLoginToken}`]);
    console.log(response.body);
    expect(response.statusCode).toBe(201);
  });

  test("Test invalid create person, missing field", async () => {
    const response = await request(app)
      .post("/people/add")
      .send(invalidCreatePerson)
      .set("Cookie", [`token=${abbotLoginToken}`]);
    console.log(response.body);
    expect(response.statusCode).toBe(400);
  });

  test("Test get people me, abbot", async () => {
    const response = await request(app)
      .get("/people/me")
      .set("Cookie", [`token=${abbotLoginToken}`]);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  test("Test get people me, lysander", async () => {
    const response = await request(app)
      .get("/people/me")
      .set("Cookie", [`token=${lysanderLoginToken}`]);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  test("Test get people me, reginald", async () => {
    const response = await request(app)
      .get("/people/me")
      .set("Cookie", [`token=${reginaldLoginToken}`]);
    await Connection.close();
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  test("Test invalid get people me, bad token", async () => {
    const response = await request(app)
      .get("/people/me")
      .set("Cookie", [`token=${invalidLoginToken}`]);
    await Connection.close();
    console.log(response.body);
    expect(response.statusCode).toBe(403);
  });

  test("Test invalid get people me, missing token", async () => {
    const response = await request(app).get("/people/me");
    await Connection.close();
    console.log(response.body);
    expect(response.statusCode).toBe(403);
  });
});
