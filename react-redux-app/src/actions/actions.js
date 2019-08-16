import axios from 'axios';

export const FETCH_AMIIBO_DATA_START = 'FETCH_AMIIBO_DATA_START';
export const FETCH_AMIIBO_DATA_SUCCESS = 'FETCH_AMIIBO_DATA_SUCCESS';
export const FETCH_AMIIBO_DATA_FAILURE = 'FETCH_AMIIBO_DATA_FAILURE';

//Build Actions Creators
export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_AMIIBO_DATA_START });
        axios.get('https://www.amiiboapi.com/api/amiibo/')
        .then(data => {
            // console.log(data)
            dispatch({ type: FETCH_AMIIBO_DATA_SUCCESS, payload: data.data.amiibo})
        })
        .catch(err => {
            dispatch({ type: FETCH_AMIIBO_DATA_FAILURE, payload: err.response})
        })
    }
}