const request = require("supertest");
const express = require("express");
const calculatorRoutes = require("../routes/calculatorRoutes");

describe("Calculator Routes", () => {
  let app;
  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use("/calculator", calculatorRoutes);
  });

  test("GET /calculator/add returns sum", async () => {
    const res = await request(app).get("/calculator/add?num1=5&num2=3");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ result: 8 });
  });

  test("GET /calculator/subtract returns difference", async () => {
    const res = await request(app).get("/calculator/subtract?num1=10&num2=4");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ result: 6 });
  });

  test("GET /calculator/multiply returns product", async () => {
    const res = await request(app).get("/calculator/multiply?num1=7&num2=6");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ result: 42 });
  });

  test("GET /calculator/divide returns quotient", async () => {
    const res = await request(app).get("/calculator/divide?num1=20&num2=4");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ result: 5 });
  });

  test("GET /calculator/divide returns error for divide by zero", async () => {
    const res = await request(app).get("/calculator/divide?num1=10&num2=0");
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: "Cannot divide by zero" });
  });
});
