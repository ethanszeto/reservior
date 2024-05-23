import request from "supertest";
import app from "../../../server/server.js";
import Connection from "../../../server/db/connection.js";

afterAll(async () => {
  await Connection.close();
});

test("Test default route", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(JSON.stringify(response.body)).toBe(JSON.stringify({ message: "Connected to the reservior API!" }));
});
