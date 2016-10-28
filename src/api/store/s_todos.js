import {REDIS} from '../../constants'

var Store, Logger;

export const hook = (API) => {
  Store = API.Store
  Logger = API.Log
}

export const details = function( id ){
  return new Promise(function( resolve, reject ) {
    Store.HGETALL(REDIS.Hash.todoDetails + id, function (err, reply) {
      Logger.info(reply)
      // if(reply > 0){
      //   Logger.info( 'Redis Hash Record Created! key = ' + REDIS.Hash.todoDetails + id )
      // }else{
      //   Logger.info( 'Redis Hash Record Updated! key = ' + REDIS.Hash.todoDetails + id )
      // }
      resolve( reply )

      // call reject() when result is unexpected.
      Store.quit()
    })
  })
}

export const create = function( id ){
  return new Promise(function( resolve, reject ) {
    Store.HSET(REDIS.Hash.todoDetails + id, ['todoKey','todo Value'], function (err, reply) {
      if(reply > 0){
        Logger.info( 'Redis Hash Record Created! key = ' + REDIS.Hash.todoDetails + id )
      }else{
        Logger.info( 'Redis Hash Record Updated! key = ' + REDIS.Hash.todoDetails + id )
      }
      resolve( reply )

      // call reject() when result is unexpected.
      Store.quit()
    })
  })
}
