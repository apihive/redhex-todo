'use strict'

module.exports = {
  ssl:true,
  keys:{
    privateKey: './keys/key.pem',
    certificate: './keys/server.crt'
  },
  ports:{
    http:6000,
    https:7000
  },
  api:{
    prefix:'/todos',
  },
  redis:{
    port: 6379,
    host: '127.0.0.1',
    db:4
  }
}
