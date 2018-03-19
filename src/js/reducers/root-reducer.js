import { combineReducers } from 'redux'

import props from "./props-reducer";
import {anchorsPosition, showAnchors} from "./global-state-reducer";
import { routerReducer } from 'react-router-redux';
import {slider} from "./calibration-reducer";


export default combineReducers({
    props,
    slider,
    showAnchors,
    anchorsPosition,
    routing: routerReducer
})