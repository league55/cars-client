import * as ActionType from "../actions/actionTypes";

const initialState = {
    ZonesPerLineAmount: [],
    RoadWaysAmount: []
};

export const slider = (state = initialState, action) => {
    const newState = state;
    switch (action.type) {
        case ActionType.SLIDER_CHANGED:
            const isLineWasPreviouslyChanged = newState[action.calibrationType][action.lineNumber];
            const prevValue = isLineWasPreviouslyChanged ? isLineWasPreviouslyChanged.prevValue : 0;
            newState[action.calibrationType][action.lineNumber] = {value: action.value, prevValue};
            return Object.assign({}, newState);
        case ActionType.SLIDER_MOVED:
            newState[action.calibrationType][action.lineNumber] = {value: action.value, prevValue: action.value};
            return Object.assign({}, newState);
        case ActionType.LINE_NUM_CHANGED:
            newState[action.calibrationType] = initialState[action.calibrationType];
            return newState;
        default:
            return newState;
    }
};

export const lineNumber = (state = {}, action) => {
    const newState = state;
    switch (action.type) {
        case ActionType.LINE_NUM_CHANGED:
            newState[action.calibrationType] = action.lineNumber;
            return Object.assign({}, newState);
        default:
            return newState;
    }
};

