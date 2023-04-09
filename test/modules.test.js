const request = require('supertest')

describe("express", () => {
  const { express } = require('../app/app')

  const app = request(express)

  it('should be defined', () => {
    expect(app).toBeDefined()
  })

  it("should be instance of Object", () => {
    expect(app).toBeInstanceOf(Object)
  })
})