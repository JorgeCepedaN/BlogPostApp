import {
    GET_ALL_BLOGS_REQUEST,
    GET_ALL_BLOGS_SUCCESS,
    GET_ALL_BLOGS_ERROR,
} from '../actions/getBlogsActions';

const INITTIAL_STATE = {
    loading: false,
    hasError: false,
    error: null,
    data: []
}

export default (state = INITTIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_BLOGS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case GET_ALL_BLOGS_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                data: action.payload
            };

        case GET_ALL_BLOGS_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                error: action.payload
            };

        default:
            return state;
    }
}