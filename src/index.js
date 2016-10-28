import HEX from 'redhex'
import * as API from './api'
import CONFIG from '../manifest'

let config: JSONObject = CONFIG
var APP = new HEX(config)

API.Initialize(APP)
