import axios from 'axios';


export const GET_BLOG_REQUEST = 'GET_BLOG_REQUEST';
export const GET_BLOG_SUCCESS = 'GET_BLOG_SUCCESS';
export const GET_BLOG_ERROR = 'GET_BLOG_ERROR';

const getBlogSuccess = payload => ({
    type: GET_BLOG_SUCCESS,
    payload
});

const getBlogError = payload => ({
    type: GET_BLOG_ERROR,
    payload
});

export const getBlog = (blogId) => dispatch => {
    dispatch({ type: GET_BLOG_REQUEST });
    return axios.get(`https://localhost:7112/api/Blog/ViewBlog/${blogId}`)
        .then(response => {
            const blog = response.data;
            dispatch(getBlogSuccess(blog));
        })
        .catch(() => {
            dispatch(getBlogError("Error while retrieving blog"));
            return Promise.reject({});
        })
}