import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';
import SiteCard from '../SiteCard/SiteCard';
import { ToastContainer, toast } from 'react-toastify';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [titles, setTitles] = useState([]);
    const [alltime, setAlltime] = useState(0);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const bookmarkHandler = paraTitle => {
        const foundTitle = titles.find(title => title === paraTitle);
        if (foundTitle) {
            toast('You Have Already Bookmarked This Blog');
        }
        else {
            const newTitles = [...titles, paraTitle];
            setTitles(newTitles);
        }
    }

    const readTimeHandler = time => {
        const newTime = alltime + time;
        setAlltime(newTime);
    }

    return (
        <main className='main-body'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                        key={blog.id}
                        bookmarkHandler={bookmarkHandler}
                        readTimeHandler={readTimeHandler}
                    ></Blog>)
                }
            </div>
            <div className='sitebar'>
                <div className='timeSpend'>
                    <h2>Spent time on read: {alltime}</h2>
                </div>
                <div className='sitebar-container'>
                    <h2 className='book-blogs'>Bookmarked Blogs: {titles.length}</h2>
                    {
                        titles.map(title => <SiteCard title={title} key={title}></SiteCard>)
                    }
                </div>
            </div>
        </main>
    );
};

export default Main;