const request = require('supertest');
const express = require('express');
const calculatorRoutes = require('../routes/calculatorRoutes');

describe('Calculator Routes', () => {
  let app;
  beforeAll(() => {
    app = express();
    app.use('/calculator', calculatorRoutes);
  });

  test('GET /calculator/add returns sum', async () => {
    const res = await request(app).get('/calculator/add?num1=2&num2=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test('GET /calculator/subtract returns difference', async () => {
    const res = await request(app).get('/calculator/subtract?num1=5&num2=2');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(3);
  });

  test('GET /calculator/multiply returns product', async () => {
    const res = await request(app).get('/calculator/multiply?num1=4&num2=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(12);
  });

  test('GET /calculator/divide returns quotient', async () => {
    const res = await request(app).get('/calculator/divide?num1=10&num2=2');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test('GET /calculator/divide with zero divisor returns error', async () => {
    const res = await request(app).get('/calculator/divide?num1=10&num2=0');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Cannot divide by zero');
  });
});
