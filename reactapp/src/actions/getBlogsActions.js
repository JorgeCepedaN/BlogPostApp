import axios from 'axios';

export const GET_ALL_BLOGS_REQUEST = 'GET_ALL_BLOGS_REQUEST';
export const GET_ALL_BLOGS_SUCCESS = 'GET_ALL_BLOGS_SUCCESS';
export const GET_ALL_BLOGS_ERROR = 'GET_ALL_BLOGS_ERROR';

const getBlogsSuccess = payload => ({
    type: GET_ALL_BLOGS_SUCCESS,
    payload

});

const getBlogsError = payload => ({
    type: GET_ALL_BLOGS_ERROR,
    payload
});

export const getAllBlogs = () => dispatch => {
    dispatch({ type: GET_ALL_BLOGS_REQUEST });
    return axios.get("https://localhost:7112/api/Blog/GetAllPosts")
        .then(response => {
            const result = response.data;
            console.log(result);
            dispatch(getBlogsSuccess(result));
        })
        .catch(() => {
            dispatch(getBlogsError("Error while fetching the blogs"));
            return Promise.reject({});
        })
}
