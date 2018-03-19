import {push} from 'react-router-redux';
import * as ActionType from "./actionTypes";
import {SettingsApi} from "../rest/SettingsApi";
import {GridCalibration} from "../rest/GridCalibration";

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

export const handleCalibrationSliderChange = (calibrationType, value, lineNumber) => {
    return (dispatch, getState) => {
        const submitProps = GridCalibration.updateGrid({calibrationType, value: value - getState().slider.prevValue, lineNumber});
        submitProps
            .then(dispatch({type: ActionType.SLIDER_MOVED, calibrationType, value}))
            .catch(dispatch({type: ActionType.SLIDER_MOVED, calibrationType, value}));
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
