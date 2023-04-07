const request = require('supertest')

describe("recived data", () => {
  const { express, data } = require('../app/app')

  let body // declared varible to get them into lifecirle hook
  const objectKeys = Object.keys(data._source) // get keys _source object from data.json file as expected keys

  beforeEach(async () => { // lifecircle hook generated new response before each test
    body = (await request(express).get("/")).body
  })

  // test:respose.body is not falsy ( null, undefined )
  it("sould not be falsy", () => {
    expect(body).not.toBeFalsy()
  })

  // test:respose.body is not empty object {} && has min one key
  it("sould be length", () => {
    const keys = Object.keys(body)
    expect(keys.length).toBeGreaterThanOrEqual(1)
  })

  // test:response.body to check mutated data before respose.body must be strict equal data
  it("sould contain strict equal data", () => {
    expect(body).toEqual(data)
  })

  // test:response.body._source to contain all keys from moked data object
  it("sould contain strict equal keys", () => {
    Object.keys(body._source).forEach((item, i) => 
      expect(item).toEqual(objectKeys[i]) 
    )
  })
})