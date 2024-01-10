import React, { useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './viewBlog.css'
import { getBlog } from '../../actions/getBlogAction';
import { deleteBlogRequest } from '../../actions/deleteBlogAction';

export class ViewBlog extends Component {
    render() {        
        return (
            <Blog/>
        );
    }
}

export const Blog = () => {

    const blog = useSelector(state => state.blog.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    useEffect(() => {
        dispatch(getBlog(id));
    }, [dispatch, id]);

    const editBlog = (blogId) => {
        navigate(`/editBlog/${blogId}`);
    }

    const deleteBlog = async (blogId) => {
        try {

            await dispatch(deleteBlogRequest(blogId));

            toast.success('Blog Deleted Successfully.');

            await delay(1500);

            navigate('/');
        } catch (error) {
            toast.error('Error while deleting blog.');
        }
    };

    return (
        <div className="blog-details-container">
            <div className="blog-details">
                <h2>{blog?.title}</h2>
                <div className="blog-categories">
                    <h3>Categories:</h3>
                    <p>{blog?.categories}</p>
                </div>
                <div className="blog-summary">
                    <h3>Summary:</h3>
                    <p>{blog?.summary}</p>
                </div>
                <div className="blog-content">
                    <h3>Content:</h3>
                    <p>{blog?.content}</p>
                </div>
                <div className="blog-buttons">
                    <button className="edit-button" onClick={() => editBlog(blog?.id)}> Edit Blog </button>
                    <button className="delete-button" onClick={() => deleteBlog(blog?.id)}> Delete Blog </button>
                </div>
            </div>
            <div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </div>
    );
};