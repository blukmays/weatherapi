export default async server => {

  const plugins = [
    { plugin: require('inert') },
    { plugin: require('vision') },
    { plugin: require('blipp') },
    {
      plugin: require('good'),
      options: {
        ops: {
          interval: 5000,
        },
        reporters: {
          console: [
            {
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [{
                log: '*',
                response: '*',
                request: '*',
                error: '*',
              }],
            },
            {
              module: 'good-console',
              args: [{
                log: '*',
                response: '*',
                request: '*',
                error: '*',
              }],
            }, 'stdout'],
        },
      },
    },
    {
      plugin: require('hapi-swagger'),
      options: {
        cors: true,
        jsonEditor: false,
        documentationPath: '/',
        info: {
          title: 'Example',
          version: '1.0.0',
          description: 'An example api',
        },
      },
    },
  ]

  await server.register(plugins)
}
