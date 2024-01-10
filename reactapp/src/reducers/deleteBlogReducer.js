import {
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_ERROR
} from '../actions/deleteBlogAction';

const INITIAL_STATE = {
    loading: false,
    hasError: false,
    error: null,
    data: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case DELETE_BLOG_REQUEST:
            return {
                ...state,
                loading: true
            };

        case DELETE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                data: action.payload
            }

        case DELETE_BLOG_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                error: action.payload
            }

        default:
            return state;
    }
};