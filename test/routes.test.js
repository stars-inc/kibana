const request = require('supertest')

describe("route GET ('/')", () => {

  const { express } = require('../app/app')

  it("respose should have status 200", async () => {
    const respose = await request(express).get("/")
    
    expect(respose.statusCode).toBe(200)
  })

  it("respose should not be falsy", async () => {
    const respose = await request(express).get("/")
    
    expect(respose.body).not.toBeFalsy()
  })
})