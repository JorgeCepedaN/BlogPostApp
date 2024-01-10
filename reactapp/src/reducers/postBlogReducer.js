import {
    POST_BLOG_REQUEST,
    POST_BLOG_SUCCESS,
    POST_BLOG_ERROR
} from '../actions/postBlogAction';

const INITIAL_STATE = {
    loading: false,
    hasError: false,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_BLOG_REQUEST:
            return {
                ...state,
                loading: true
            };

        case POST_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false
            };

        case POST_BLOG_ERROR:
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