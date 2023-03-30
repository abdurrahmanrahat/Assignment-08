import React, { useEffect } from 'react';
import './Main.css'

const Main = () => {

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <main className='main-body'>
            <div className="blog-container">

            </div>
            <div className="sitebar-container">
                <h2>sitebar</h2>
            </div>
        </main>
    );
};

export default Main;