import * as ActionType from "../actions/actionTypes";

export const camera = (state = {isCameraActive: undefined}, action) => {
    switch (action.type) {
        case ActionType.CAMERA_STATUS_UPDATED:
            state.isCameraActive = action.value;
            return state;
        default:
            return state;
    }
};

export const applicationLogs = (state = ["- - -"], action) => {
    switch (action.type) {
        case ActionType.LOGS_UPDATE:
            return state.concat(action.value).concat("- - -");
        default:
            return state;
    }
};

