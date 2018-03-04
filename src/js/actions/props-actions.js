import {push} from 'react-router-redux';
import * as ActionType from "./actionTypes";

export const proccessCameraId = (id) => {
    return dispatch => {

        dispatch({
            type: ActionType.SAVE_CAMERA_ID,
            id
        })

        dispatch(push('/'));
    }
}