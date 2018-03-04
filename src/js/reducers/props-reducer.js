import * as ActionType from "../actions/actionTypes";

const initialState = {
    id: 0,
    host: ""
};

export const PropsConstants = {

};


export default (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SAVE_CAMERA_ID:
            return {
                id: action.id
            };
        default:
            return state
    }
}

