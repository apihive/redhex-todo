import * as todosStore from '../store/s_todos'
import {RESPONSES} from '../../constants'

var Store, Logger;

export const hook = (API) => {
  Store = API.Store
  Logger = API.Log
}

export const details = (req,res) => {
  const id = req.params.id
  Logger.info('Retreiving new record......')
  todosStore.details(id).then(
    function(reply) {

      res.send(reply)

    }, function( err ) {

      Logger.error( err )

    }
  )
}

export const create = (req,res) => {
  Logger.info('Creating a new record......')
  const id = 'testID'
  todosStore.create(id).then(
    function(reply) {

      res.sendStatus(RESPONSES.OK.CODE)

    }, function( err ) {

      Logger.error( err )

    }
  )
}
