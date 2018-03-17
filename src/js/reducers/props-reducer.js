import * as ActionType from "../actions/actionTypes";

const initialState = {
    id: 0,
    host: "",
    streamProps: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SAVE_CAMERA_ID:
            return Object.assign({}, state, {
                id: action.id
            });
        case ActionType.LOAD_PROPS:
            return Object.assign({}, state, {
                streamProps: action.properties
            });
        case ActionType.LOAD_SINGLE_PROP:
        case ActionType.PROPERTY_CHANGE:
            const newProps = state.streamProps;
            const i = newProps.findIndex(prop => prop.key = action.key);
            newProps[i].value = action.value;

            return Object.assign({}, state, {
                streamProps: newProps
            });
        default:
            return state
    }
}

