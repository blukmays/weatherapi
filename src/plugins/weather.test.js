import Server from '../src'

describe(`Weather Plugin`, () => {


  let server
  beforeEach(async () => {
    server = await Server()
  })

  it(`test the default zipcode`, async () => {
    const { statusCode,result } = await server.inject('/v1/weather/current')
    expect(statusCode).to.equal(200)
    expect(result).to.be.an.onject()
  })
})
