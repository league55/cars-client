import { combineReducers } from 'redux'

import props from "./props-reducer";
import { routerReducer } from 'react-router-redux';


export default combineReducers({
    props,
    routing: routerReducer
})