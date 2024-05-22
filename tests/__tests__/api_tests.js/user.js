import request from "supertest";
import app from "../../../server/server.js";
import Connection from "../../../server/db/connection.js";
import { abbotLoginToken, lysanderLoginToken, reginaldLoginToken, invalidLoginToken } from "../../test_data/token.js";
import {
  validUserCreateJohn,
  invalidUserCreateJohnLessFields,
  validLoginAbbot,
  invalidLoginAbbotBadPassword,
  invalidLoginBadUsername,
  validLoginLysander,
  validLoginReginald,
} from "../../test_data/user.js";

describe("User tests", () => {
  test("Test user sign up", async () => {
    const response = await request(app).post("/user/create-account").send(validUserCreateJohn);
    console.log(response.body);
    expect(response.statusCode).toBe(201);
  });

  test("Test invalid user sign up, lacking field", async () => {
    const response = await request(app).post("/user/create-account").send(invalidUserCreateJohnLessFields);
    console.log(response.body);
    expect(response.statusCode).toBe(400);
  });

  test("Test user login, abbot", async () => {
    const response = await request(app).post("/user/login").send(validLoginAbbot);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  test("Test user login, lysander", async () => {
    const response = await request(app).post("/user/login").send(validLoginLysander);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  test("Test user login, reginald", async () => {
    const response = await request(app).post("/user/login").send(validLoginReginald);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  test("Test invalid user login, bad password", async () => {
    const response = await request(app).post("/user/login").send(invalidLoginAbbotBadPassword);
    console.log(response.body);
    expect(response.statusCode).toBe(400);
  });

  test("Test invalid user login, bad username", async () => {
    const response = await request(app).post("/user/login").send(invalidLoginBadUsername);
    console.log(response.body);
    expect(response.statusCode).toBe(404);
  });

  test("Test get user me, abbot", async () => {
    const response = await request(app)
      .get("/user/me")
      .set("Cookie", [`token=${abbotLoginToken}`]);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  test("Test get user me, lysander", async () => {
    const response = await request(app)
      .get("/user/me")
      .set("Cookie", [`token=${lysanderLoginToken}`]);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  test("Test get user me, reginald", async () => {
    const response = await request(app)
      .get("/user/me")
      .set("Cookie", [`token=${reginaldLoginToken}`]);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  test("Test invalid get user me, bad token", async () => {
    const response = await request(app)
      .get("/user/me")
      .set("Cookie", [`token=${invalidLoginToken}`]);
    console.log(response.body);
    expect(response.statusCode).toBe(403);
  });

  test("Test invalid get user me, missing token", async () => {
    const response = await request(app).get("/user/me");
    await Connection.close();
    console.log(response.body);
    expect(response.statusCode).toBe(403);
  });
});
