import { combineReducers } from 'redux'
import { uuidv4, createUsers } from '../helpers'
import {map,get, cloneDeep} from 'lodash'


// create array of reducers name 

export const redNames = [ 'users','tasks','subtasks' ]

// create handlers 

const set_data =(state, action)=>{
  const newState = cloneDeep(state)
  //const newUUID = uuidv4() 
  newState.data[action.payload.id] = { ...action.payload }
  return newState  
  // return {...state, data:{...state.data, [newUUID]: { ...action.payload ,id:newUUID }}} 
} 

const buildingReducer =()=>{
// create  empty object to store reducer 
  const reducers={}
  map(redNames, (redname)=>{
    const handlers = {
      [`setData_${redname}`]: set_data
    }
      reducers[redname] = (state = {data: {}}, action)=>(
        get(handlers, action.type, state=>state)(state, action))
  })
  return reducers
}
const myreducers = buildingReducer()
console.log('Reduuuuuuuuuuuucers', myreducers)
const allReducers = combineReducers(myreducers)

export default allReducers 
