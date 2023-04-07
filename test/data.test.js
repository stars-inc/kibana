const request = require('supertest')

describe("recived data", () => {
  const { express, data } = require('../app/app')

  let body
  const objectKeys = Object.keys(data._source)

  beforeEach(async () => {
    body = (await request(express).get("/")).body
  })

  it("sould not be falsy", () => {
    expect(body).not.toBeFalsy()
  })

  it("sould be length", () => {
    const keys = Object.keys(body)
    expect(keys.length).toBeGreaterThanOrEqual(1)
  })

  it("sould contain strict equal data", () => {
    expect(body).toEqual(data)
  })

  it("sould contain strict equal keys", () => {
    Object.keys(body._source).forEach((item, i) => 
      expect(item).toEqual(objectKeys[i]) 
    )
  })
})