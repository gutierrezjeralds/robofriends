import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ITEMS_PENDING,
    REQUEST_ITEMS_SUCCESS,
    REQUEST_ITEMS_FAILED
} from './constants'

// Reducer for Search items
const intialStateSearch = {
    searchField: ''
}

export const searchItems = (state=intialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            // return {...state, searchField: action.payload}
            return Object.assign({}, state.searchField, { searchField: action.payload })
        default:
            return state
    }
}

// Reducer for ajax request
const intialStateItem = {
    isPending: false,
    items: [],
    error: ''
}

export const requestItems = (state=intialStateItem, action={}) => {
    switch(action.type) {
        case REQUEST_ITEMS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ITEMS_SUCCESS:
            return Object.assign({}, state, { items: action.payload, isPending: false })
        case REQUEST_ITEMS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state
    }
}

// Reducer for random number
const intialStateRandomNum = {
    randomNum: Math.floor(Math.random() * 100)
}

export const setRandomNum = (state=intialStateRandomNum) => {
    return state
}