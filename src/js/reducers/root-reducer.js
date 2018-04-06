import { combineReducers } from 'redux'

import props from "./props-reducer";
import {anchorsPosition, showAnchors} from "./global-state-reducer";
import { routerReducer } from 'react-router-redux';
import {lineNumber, slider} from "./calibration-reducer";
import {applicationLogs, camera} from "./logs-reducer";


export default combineReducers({
    props,
    slider,
    showAnchors,
    anchorsPosition,
    lineNumber,
    camera,
    applicationLogs,
    routing: routerReducer
})