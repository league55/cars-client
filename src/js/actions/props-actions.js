import {push} from 'react-router-redux';
import * as ActionType from "./actionTypes";
import {SettingsApi} from "../rest/SettingsApi";

export const proccessCameraId = (id) => {
    return dispatch => {

        dispatch({
            type: ActionType.SAVE_CAMERA_ID,
            id
        });

        dispatch(push('/'));
    }
};

export const handlePropertyChange = dispatch => {

    SettingsApi.updateProperty(dispatch)
        .then(props => dispatch({
            type: ActionType.LOAD_PROPS,
            ...props
        }))
        .catch(e => alert(e));
};


export const handleLoadProps = dispatch => {
    return SettingsApi.loadProperties()
        .then(properties => dispatch({
            type: ActionType.LOAD_PROPS,
            properties
        }))
        .catch(e => alert(e));
};
