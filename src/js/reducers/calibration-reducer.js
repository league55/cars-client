import * as ActionType from "../actions/actionTypes";

const initialState = {
    ZonesPerLineAmount: 0,
    RoadWaysAmount: 0
};

export const slider = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SLIDER_MOVED:
            const newState = state;
            newState[action.calibrationType] = action.value;
            return Object.assign({}, newState);
        default:
            return state
    }
};

