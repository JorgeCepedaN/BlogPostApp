import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlog } from '../../actions/getBlogAction';
import toast, { Toaster } from 'react-hot-toast';
import { putModifyBlogRequest } from '../../actions/putBlogAction';

export class EditBlog extends Component {

    render() {
        return (
            <Blog />
        );
    }
}

const Blog = () => {

    const blog = useSelector(state => state.blog.data);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );


    useEffect(() => {
        dispatch(getBlog(id));
    }, [dispatch, id]);

    const [formData, setFormData] = useState({
        title: '',
        categories: '',
        summary: '',
        content: '',
    });

    useEffect(() => {
        setFormData({
            title: blog.title,
            categories: blog.categories,
            summary: blog.summary,
            content: blog.content,
        });
    }, [blog]);

    const handleUpdatePost = async (e) => {
        e.preventDefault();

        const updatedBlogObject = {
            id: blog.id,
            title: formData.title,
            categories: formData.categories,
            summary: formData.summary,
            content: formData.content,
            likes: blog.likes,
        };

        try {
            await dispatch(putModifyBlogRequest(updatedBlogObject))

            toast.success('Blog Updated Successfully.');

            await delay(2000);

            navigate(`/viewBlog/${updatedBlogObject.id}`);

        } catch (error) {
            toast.error('Error while updating the blog');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="blog-form">
            <form method="post" onSubmit={handleUpdatePost}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" placeholder="A title" value={formData.title} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Categories:</label>
                    <input type="text" name="categories" placeholder="Category one" value={formData.categories} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Write your Summary:</label>
                    <textarea name="summary" rows={6} placeholder="Some summary that will be displayed on the first view of the blog" value={formData.summary} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Write your Content:</label>
                    <textarea name="content" rows={6} placeholder="Some content that will be displayed only when viewed the blog" value={formData.content} onChange={handleInputChange} required />
                </div>
                <hr />
                <div className="form-buttons">
                    <button className="reset-button" type="reset">Reset information</button>
                    <button className="submit-button" type="submit">Save blog</button>
                </div>
            </form>
            <div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>

        </div>
    );
};

export default EditBlog;
