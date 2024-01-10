import {
    GET_BLOG_REQUEST,
    GET_BLOG_SUCCESS,
    GET_BLOG_ERROR
} from '../actions/getBlogAction';

const INITTIAL_STATE = {
    loading: false,
    hasError: false,
    error: null,
    data: {}
}

export default (state = INITTIAL_STATE, action) => {
    switch (action.type) {
        
        case GET_BLOG_REQUEST:
            return {
                ...state,
                loading: true
            };

        case GET_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                data: action.payload
            };

        case GET_BLOG_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                error: action.payload
            }
        default:
            return state;
    }
}