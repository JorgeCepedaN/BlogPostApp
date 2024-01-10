import { combineReducers } from 'redux';
import blogsReducers from './getBlogsReducers';
import postBlogReducer from './postBlogReducer';
import putBlogReducer from './putBlogReducer';
import deleteBlogReducer from './deleteBlogReducer';
import getBlogReducer from './getBlogReducer';

const rootReducer = combineReducers({
    blogs: blogsReducers,
    blog: getBlogReducer,
    postBlog: postBlogReducer,
    putBlog: putBlogReducer,
    deleteBlog: deleteBlogReducer
});

export default rootReducer;