import {ROUTES} from '../constants'
import * as CONTROLLERS from './controllers'
import * as STORES from './store'

export default function(API){
  //hook API object to controllers ans stores
  CONTROLLERS.TODOS.hook(API)
  STORES.TODOS.hook(API)

  const endpoints = [

    { url:ROUTES.TODOS.DETAILS, methods:['GET'], operator: CONTROLLERS.TODOS.details },
    { url:ROUTES.TODOS.CREATE, methods:['POST'], operator: CONTROLLERS.TODOS.create }

  ]

  API.Route(endpoints)
}
