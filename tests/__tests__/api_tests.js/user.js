import request from "supertest";
import app from "../../../server/server.js";

describe("User tests", () => {
  test("Test user sign up", async () => {
    const response = await request(app)
      .post("/user/create-account")
      .send({ firstName: "John", lastName: "Smith", username: "johns", password: "123" });
    expect(response.statusCode).toBe(200);
  });
});
