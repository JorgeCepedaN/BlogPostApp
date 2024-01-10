import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postBlog } from '../../actions/postBlogAction';
import toast, { Toaster } from 'react-hot-toast';
import './createBlog.css';

export class CreateBlog extends Component {
    render() {
        return (
            <NewBlog/>
        );
    }
}

export function NewBlog() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const [blogState, setBlogState] = useState({
        id: 0,
        title: '',
        categories: '',
        summary: '',
        content: '',
        likes: 0
    });

    const onChangeTitle = (e) => {
        setBlogState({
            ...blogState,
            title: e.target.value
        });
    };

    const onChangeCategorie = (e) => {
        setBlogState({
            ...blogState,
            categories: e.target.value
        });
    };

    const onChangeSummary = (e) => {
        setBlogState({
            ...blogState,
            summary: e.target.value
        });
    };

    const onChangeContent = (e) => {
        setBlogState({
            ...blogState,
            content: e.target.value
        });
    };

    const handleNewPost = async (e) => {
        e.preventDefault();

        const blogObject = {
            id: blogState.id,
            title: blogState.title,
            categories: blogState.categories,
            summary: blogState.summary,
            content: blogState.content,
            likes: blogState.likes
        };

        await dispatch(postBlog(blogObject))
            .then(() => {
                toast.success('Blog saved successfully.');

                delay(1000);

                navigate('/');


            })
            .catch(() => {
                toast.error('Error while creating blog.');
            })


    };

    return (
        <div className="blog-form">
            <form method="post" onSubmit={handleNewPost}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" placeholder="A title" value={blogState.title} onChange={onChangeTitle} required />
                </div>
                <div className="form-group">
                    <label>Categories:</label>
                    <input type="text" name="categories" placeholder="Category one" value={blogState.categories} onChange={onChangeCategorie} required />
                </div>
                <div className="form-group">
                    <label>Write your Summary:</label>
                    <textarea name="summary" rows={6} placeholder="Some summary that will be displayed on the first view of the blog" value={blogState.summary} onChange={onChangeSummary} required />
                </div>
                <div className="form-group">
                    <label>Write your Content:</label>
                    <textarea name="content" rows={6} placeholder="Some content that will be displayed only when viewed the blog" value={blogState.content} onChange={onChangeContent} required />
                </div>
                <hr />
                <div className="form-buttons">
                    <button className="reset-button" type="reset">Reset information</button>
                    <button className="submit-button" type="submit" >Save blog</button>
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
}
