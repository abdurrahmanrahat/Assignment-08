import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';
import SiteCard from '../SiteCard/SiteCard';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const bookmarkHandler = title => {
        const newTitles = [...titles, title];
        setTitles(newTitles);
    }
    console.log(titles);

    return (
        <main className='main-body'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                        key={blog.id}
                        bookmarkHandler={bookmarkHandler}
                    ></Blog>)
                }
            </div>
            <div className='sitebar-container'>
                <h2></h2>
                <h2 className='book-blogs'>Bookmarked Blogs: {titles.length}</h2>
                {
                    titles.map(title => <SiteCard title={title}></SiteCard>)
                }
            </div>

        </main>
    );
};

export default Main;