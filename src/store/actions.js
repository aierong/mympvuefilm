import {
  RECEIVE_LIST ,
  MOVIES_ARR ,
  increment ,
  decrement
} from './mutation-type'

import listData from '../datas/list-data'

export default {
  getList ( { commit } ) {
    console.log( "actions" )
    //触发对应的mutation
    commit( RECEIVE_LIST , listData )
  } ,
  getMoviesArr ( { commit } , data ) {
    commit( MOVIES_ARR , data )
  } ,
  increment ( { commit } ) {
    commit( increment )
  } ,
  decrement ( { commit } ) {
    commit( decrement )
  } ,
}
