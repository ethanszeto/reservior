import request from "supertest";
import app from "../../../server/server.js";
import Connection from "../../../server/db/connection.js";
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
    expect(response.statusCode).toBe(200);
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
    await Connection.close();
    console.log(response.body);
    expect(response.statusCode).toBe(404);
  });
});
