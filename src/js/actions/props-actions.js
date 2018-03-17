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

export const handlePropertyChange = property => {
    return {
        type: ActionType.PROPERTY_CHANGE,
        ...property
    }
};

export const handlePropertisSubmit = () => {
    return (dispatch, getState) => {
        const submitProps = SettingsApi.submitProps(getState().props.streamProps);
        submitProps
            .catch(() => alert("failed to save props"));
    }
};


export const handleLoadProps = dispatch => {
    return SettingsApi.loadProperties()
        .then(properties => dispatch({
            type: ActionType.LOAD_PROPS,
            properties
        }))
        .catch(e => alert(e));
};
