import { combineReducers } from 'redux'

import props from "./props-reducer";
import {anchorsPosition, showAnchors} from "./global-state-reducer";
import { routerReducer } from 'react-router-redux';


export default combineReducers({
    props,
    showAnchors,
    anchorsPosition,
    routing: routerReducer
})