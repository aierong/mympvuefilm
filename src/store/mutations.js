import {
  RECEIVE_LIST ,
  MOVIES_ARR ,
  increment ,
  decrement
} from './mutation-type'

export default {
  [ RECEIVE_LIST ] ( state , { list_data } ) {
    state.listTmp = list_data
    // console.log( state )
  } ,
  [ MOVIES_ARR ] ( state , data ) {
    state.moviesArr = data
    // console.log( state )
  } ,
  [ increment ] ( state ) {
    const obj = state
    obj.count += 1
  } ,
  [ decrement ] ( state ) {
    const obj = state
    obj.count -= 1
  } ,
}
