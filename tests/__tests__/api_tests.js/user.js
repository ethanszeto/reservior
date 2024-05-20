import request from "supertest";
import app from "../../../server/server.js";

describe("User tests", () => {
  test("Test user sign up", async () => {
    const response = await request(app).post("/user/create-account").send({});
    expect(response.statusCode).toBe(200);
    expect(JSON.stringify(response.body)).toBe(JSON.stringify({ message: "Connected to the reservior API!" }));
  });
});
