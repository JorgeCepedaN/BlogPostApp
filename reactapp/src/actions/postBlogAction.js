import axios from 'axios';

export const POST_BLOG_REQUEST = 'POST_BLOG_REQUEST';
export const POST_BLOG_SUCCESS = 'POST_BLOG_SUCCESS';
export const POST_BLOG_ERROR = 'POST_BLOG_ERROR';

const postBlogSuccess = payload => ({
    type: POST_BLOG_SUCCESS,
    payload
});

const postBlogError = payload => ({
    type: POST_BLOG_ERROR,
    payload
})

export const postBlog = (blog) => dispatch => {
    dispatch({ type: POST_BLOG_REQUEST });
    return axios.post(`https://localhost:7112/api/Blog/AddBlog`, blog)
        .then(() => {
            dispatch(postBlogSuccess());
        })
        .catch(() => {
            dispatch(postBlogError("Error while creating blog"));
            return Promise.reject({});
        })
}