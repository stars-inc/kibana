const { data } = require('../../app/app')

const fetchingData = url => {
  return new Promise((resolve) => {
    return resolve(data._source)
  })
}

module.exports = { fetchingData }