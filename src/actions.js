import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ITEMS_PENDING,
    REQUEST_ITEMS_SUCCESS,
    REQUEST_ITEMS_FAILED
} from './constants'

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const setRequestItems = () => (dispatch) => {
    dispatch({ type: REQUEST_ITEMS_PENDING })
    fetch('./assets/json/data.json')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ITEMS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ITEMS_FAILED, payload: true }))
}

