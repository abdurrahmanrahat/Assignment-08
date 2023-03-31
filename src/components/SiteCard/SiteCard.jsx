import React from 'react';
import './SiteCard.css'

const SiteCard = ({ title }) => {
    // console.log(props.blogs);


    return (
        <div>
            <div className='bookmark-blog-title'>
                {
                    <h6>{title}</h6>
                }
            </div>
        </div>
    );
};

export default SiteCard;