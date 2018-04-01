import Fetch from 'node-fetch'
import Joi from 'joi'

const API_KEY = 'a90a1769668d41f38e80d8ee118e7760'

const fetch = async uri => {
  const response = await Fetch(uri)
  return await response.json()
}

export default {
pkg:require('./package'),

  async register(server,option) {

  server.route({
    method: 'GET',
    path: '/v1/weather/current',
    options:{
      tags:['api'],
      validate: {
        query:{
          zipcode: Joi.string().min(5).max(10),
          name: Joi.string(),

        }
      }
    },
    async handler(req, h) {
      console.log(req.query)
      const {name,zipcode = '84129'}=req.query

      if (name) {
        return await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${name},us&APPID=${API_KEY}`)
      } else {
        return await fetch (`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${API_KEY}`)
      }





    }
  })

    server.route({
      method: 'GET',
      path: '/v1/weather/forecast',
      options:{
        tags:['api'],
        validate: {
          query:{
            zipcode: Joi.string().min(5).max(10),

          }
        }
      },
      async handler(req, h) {
        console.log(req.query)
        const {zipcode = '84129'}=req.query

        {
          return await fetch (`http://api.openweathermap.org/data/2.5/forecast?q=${zipcode},us&APPID=${API_KEY}`)
        }





      }
    })








  //   server.route({
  //     method: 'GET',
  //     path:'/v1/weather/forecast',
  //     option: {
  //       tags:['api'],
  //       validate: {
  //         query: {
  //           zipcode: Joi.string().min(5).max(10),
  //           name: Joi.string(),
  //         }
  //       }
  //     },
  //     async handler(req, h) {
  //       // console.log(req.query)
  //       const {name,zipcode = '84129'}=req.query
  //       return await fetch (`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&APPID=${API_KEY}`)
  //
  //     }
  //
  // })
}}
