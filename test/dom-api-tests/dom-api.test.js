/**
 * @jest-environment jsdom
 */


describe('fake dom api testing', () => {

  const { fetchingData } = require('../../samples/dom/app')

  // NOTE: with fake api jsdom
  const root = document.createElement('div')

  it('dom node is defined', () => {
    expect(root).toBeDefined()
  })

  // to load diff, change some keys in ./data/data.json
  it('match difference recieved data from data.json', () => {
    fetchingData('http://localhost:4444')
      .then(data => 
        Object.keys(data).forEach(item => expect(item).toMatchSnapshot())
      )
  })
})