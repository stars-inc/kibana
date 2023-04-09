const { sum } = require('../fn')

describe('original fn', () => {
  it('to be definaed', () => {
    expect(sum).toBeDefined()
  })

  //comment next test for check how coverage works
  // to get 100% coverage uncomment next test

  // it('should return correct value', () => {
  //   expect(sum(1, 2)).toBe(3)
  // })
})

describe('mock fn', () => {
  let log
  beforeEach(() => log = jest.fn().mockImplementation(() => sum))
  beforeEach(() => log = jest.fn().mockReturnValue(3))
  afterAll(() => jest.fn().mockClear())

  it('should be called', () => {
    log() // called mock fn at once
    expect(log).toBeCalled()
  })
  
  it('should be called times', () => {
    log()
    log() // called mock fn two times
    expect(log).toBeCalledTimes(2)
  })

  it('should return correct value', () => {
    expect(log()).toEqual(3) // mock fn called & mockReturnValue 3
  })
})