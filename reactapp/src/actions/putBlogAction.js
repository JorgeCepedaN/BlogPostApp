import axios from 'axios';

export const PUT_LIKE_BLOG_REQUEST = 'PUT_LIKE_BLOG_REQUEST';
export const PUT_LIKE_BLOG_SUCCESS = 'PUT_LIKE_BLOG_SUCCESS';
export const PUT_LIKE_BLOG_ERROR = 'PUT_LIKE_BLOG_ERROR';

export const PUT_MODIFY_BLOG_REQUEST = 'PUT_MODIFY_BLOG_REQUEST';
export const PUT_MODIFY_BLOG_SUCCESS = 'PUT_MODIFT_BLOG_SUCCESS';
export const PUT_MODIFY_BLOG_ERROR = 'PUT_MODIFY_BLOG_ERROR';

const putLikeBlogSuccess = payload => ({
    type: PUT_LIKE_BLOG_SUCCESS,
    payload
});

const putLikeBlogError = payload => ({
    type: PUT_LIKE_BLOG_ERROR,
    payload
});

export const putLikeBlogRequest = (blogId) => dispatch => {
    dispatch({ type: PUT_LIKE_BLOG_REQUEST });

    return axios.put(`https://localhost:7112/api/Blog/AddLike/${blogId}`)
        .then(() => {
            dispatch(putLikeBlogSuccess())
        })
        .catch(() => {
            dispatch(putLikeBlogError("Error while liking the blog"));
            return Promise.reject({});
        })
}

const putModifyBlogSuccess = payload => ({
    type: PUT_MODIFY_BLOG_SUCCESS,
    payload
})

const putModifyBlogError = payload => ({
    type: PUT_MODIFY_BLOG_ERROR,
    payload
})

export const putModifyBlogRequest = (blog) => dispatch => {
    dispatch({ type: PUT_MODIFY_BLOG_REQUEST });

    return axios.put(`https://localhost:7112/api/Blog/ModifyBlog/`, blog)
        .then(response => {
            dispatch(putModifyBlogSuccess(response))
        })
        .catch(() => {
            dispatch(putModifyBlogError("Error while updating blog"));
            return Promise.reject({});
        })
}