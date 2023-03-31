import React from 'react';
import './QuestionAns.css';

const QuestionAns = () => {
    return (
        <div>
            <div className='hr-div'>
                <hr />
            </div>
            <div className='blogs-container'>
                <div className="blog">
                    <h2>Q-1. What is the different between props and state?</h2>
                    <p>In reactJS, we use props for receiving attribute type data from the calling component and in other hands, state use for declaring initial value then set a new value by calling set function of it.</p>
                </div>
                <div className="blog">
                    <h2>Q-2. How does useState work?</h2>
                    <p>The useState method of reactJS is used to declare a variable with initial value (declaring for object an empty second bracket and declaring for array an empty array as well as declaring for number with initial value 0) & when we need to change this variable, we call the function of it called setFunction.</p>
                </div>
                <div className="blog">
                    <h2>Q-3. What can do useEffect except loading data?</h2>
                    <p>We can use useEffect in reactJS for loading data as well as use it with an dependency value. If the value is updated, the useEffect hook or function in reactJS will execute again and again. (Actually, I don't know more about useEffect)</p>
                </div>
                <div className="blogs">
                    <h2>Q-4. How does react work?</h2>
                    <p>ReactJS is one of the most popular JavaScript library for mobile and web application development. That is Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionAns;