import { configureStore } from '@reduxjs/toolkit'
import getblogsReducers from '../reducers/getBlogsReducers'
import getblogReducers from '../reducers/getBlogReducer'
import postBlogReducer from '../reducers/postBlogReducer'
import putBlogReducer from '../reducers/putBlogReducer'
import deleteBlogReducer from '../reducers/deleteBlogReducer'

export default configureStore({
    reducer: {
        blogs: getblogsReducers,
        blog: getblogReducers,
        postBlog: postBlogReducer,
        putBlog: putBlogReducer,
        deleteBlog: deleteBlogReducer
    },
})