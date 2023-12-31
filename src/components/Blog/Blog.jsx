import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {

    const { id, coverImage, authorImage, name, title, read } = props.blog;

    const bookmarkHandler = props.bookmarkHandler;
    const readTimeHandler = props.readTimeHandler;

    return (
        <div className='blog'>
            <img className='blog-img' src={coverImage} alt="" />
            <div className="author-info">
                <div className='author-img-name'>
                    <img src={authorImage} alt="" />
                    <div className='author-name-date'>
                        <h4>{name}</h4>
                        <p>Mar 24 (6 Days ago)</p>
                    </div>
                </div>

                <p>{read} min read <span className='bookmark-icon' onClick={() => bookmarkHandler(title)}><FontAwesomeIcon icon={faBookmark} /></span></p>
            </div>
            <h2>{title}</h2>
            {/* <a onClick={() => readTimeHandler(read)} href="#">Mark as read</a> */}
            <button onClick={() => readTimeHandler(read)}>Mark as read</button>
        </div>
    );
};

export default Blog;