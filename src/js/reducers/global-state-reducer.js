import * as ActionType from "../actions/actionTypes";

const initialState = {
    showAnchors: false
};

export const showAnchors = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.TRIGGER_ANCHORS:
            return !initialState.showAnchors
        default:
            return state
    }
};

const initialAnchorsState = {
    topLeftAnchor: {x: 10, y: 20},
    topRightAnchor: {x: 20, y: 20},
    botRightAnchor: {x: 20, y: 10},
    botLeftAnchor: {x: 10, y: 10}
};

export const anchorsPosition = (state = initialAnchorsState, action) => {
    switch (action.type) {
        case ActionType.ANCHOR_MOVED:
            const newState = Object.assign({}, state);
            newState[action.name] = action.position;

            return newState;
        default:
            return state
    }
};

