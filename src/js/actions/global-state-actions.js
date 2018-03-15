import * as ActionType from "./actionTypes";

export const triggerAnchorsState = (dispatch) => {
    dispatch({
        type: ActionType.TRIGGER_ANCHORS
    });
};


export const saveAnchorePosition = (name, position) => {
    return dispatch => {
        dispatch({
            type: ActionType.ANCHOR_MOVED,
            name,
            position
        });
    }
};