import axios from 'axios';

export const DELETE_BLOG_REQUEST = 'DELETE_BLOG_REQUEST';
export const DELETE_BLOG_SUCCESS = 'DELETE_BLOG_SUCCESS';
export const DELETE_BLOG_ERROR = 'DELETE_BLOG_ERROR';

const deleteBlogSuccess = payload => ({
    type: DELETE_BLOG_SUCCESS,
    payload
});

const deleteBlogError = payload => ({
    type: DELETE_BLOG_ERROR,
    payload
});

export const deleteBlogRequest = (blogId) => dispatch => {
    dispatch({ type: DELETE_BLOG_REQUEST });

    return axios.delete(`https://localhost:7112/api/Blog/DeleteBlog/${blogId}`)
        .then(response => {
            dispatch(deleteBlogSuccess(response));
        })
        .catch(error => {
            dispatch(deleteBlogError('Error while deleting the blog'));
            return Promise.reject;
        })
};