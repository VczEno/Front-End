import storeReducer from "../reducers/reducer"
import {createStore} from 'redux'

const initialState=[]
export const store= createStore(storeReducer, initialState)