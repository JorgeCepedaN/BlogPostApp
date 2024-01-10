import {
    PUT_LIKE_BLOG_REQUEST,
    PUT_LIKE_BLOG_SUCCESS,
    PUT_LIKE_BLOG_ERROR,
    PUT_MODIFY_BLOG_REQUEST,
    PUT_MODIFY_BLOG_SUCCESS,
    PUT_MODIFY_BLOG_ERROR
} from '../actions/putBlogAction';

const INITTIAL_STATE = {
    loading: false,
    hasError: false,
    error: false,
    data: []
};

export default (state = INITTIAL_STATE, action) => {
    switch (action.type) {
        case PUT_LIKE_BLOG_REQUEST:
            return {
                ...state,
                loading: true
            };

        case PUT_LIKE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false
            };

        case PUT_LIKE_BLOG_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                error: action.payload
            };

        case PUT_MODIFY_BLOG_REQUEST:
            return {
                ...state,
                loading: true
            };

        case PUT_MODIFY_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                data: action.payload
            };

        case PUT_MODIFY_BLOG_ERROR:
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