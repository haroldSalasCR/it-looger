import { ADD_LOGS, GET_LOGS, LOGS_ERROR, SET_LOADING } from "./types";


export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type:GET_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

export const addLogs = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(log)
        })
        const data = await res.json();

        dispatch({
            type:ADD_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.data
        });
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}