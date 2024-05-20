import request from "supertest";
import app from "../../../server/server.js";

describe("api tests", () => {
  test("base", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
