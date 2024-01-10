import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../actions/getBlogsActions';
import './home.css';
import { putLikeBlogRequest } from '../actions/putBlogAction';

export function Blogs() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs.data);

    useEffect(() => {
        dispatch(getAllBlogs());
    }, [dispatch]);

    const LikeButtonHandler = async (blogId) => {
        await dispatch(putLikeBlogRequest(blogId));

        dispatch(getAllBlogs());
    };

    return (
        <div>
            {blogs.map(blog => (
                <div className="blog" key={blog.id}>
                    <div className="blog-header">
                        <div className="blog-header-title">
                            <h3>{blog.title}</h3>
                        </div>
                        <div className="blog-header-button">
                            <button type="button" className="editBlog">
                                <Link className="button-text" to={`/viewBlog/${blog.id}`}>Edit Blog</Link>
                            </button>
                        </div>
                    </div>
                    <h4>{blog.categories}</h4>
                    <p>{blog.summary}</p>
                    <div className="blog-like">
                        <p>Total Likes: {blog.likes}</p>
                        <button className="blog-like-button" onClick={() => LikeButtonHandler(blog.id)}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
