import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';

const Main = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <main className='main-body'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog blog={blog}></Blog>)
                }
            </div>
            <div className="sitebar-container">
                <h2>sitebar</h2>
            </div>
        </main>
    );
};

export default Main;