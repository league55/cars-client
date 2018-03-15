import * as ActionType from "../actions/actionTypes";

const defaultShowAnchors = false;
export const showAnchors = (state = defaultShowAnchors, action) => {
    switch (action.type) {
        case ActionType.TRIGGER_ANCHORS:
            return !state;
        default:
            return state;
    }
};

const initialAnchorsState = {
    topLeftAnchor: {x: 20, y: 20},
    topRightAnchor: {x: 40, y: 20},
    botRightAnchor: {x: 40, y: 40},
    botLeftAnchor: {x: 20, y: 40}
};

export const anchorsPosition = (state = initialAnchorsState, action) => {
    switch (action.type) {
        case ActionType.ANCHOR_MOVED:
            const newState = Object.assign({}, state);
            newState[action.name] = action.position;

            return newState;
        default:
            return state;
    }
};

