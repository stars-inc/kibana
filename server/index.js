const { express } = require('../app/app')
const port = process.env.PORT ?? 4444


express.listen(port, () =>
  console.log(`Server has been started at port: ${port}`)
)