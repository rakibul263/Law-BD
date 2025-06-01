import React from 'react';

const Blog = ({blog}) => {
    console.log(blog);
    const {question, answer} = blog;
    return (
        <div tabIndex={0} className="collapse collapse-arrow border-base-300 border mt-5 bg-gray-200 rounded-lg shadow-lg">
            <div className="collapse-title text-xl font-semibold">{question}</div>
            <div className="collapse-content text-lg text-gray-400">
                {answer}
            </div>
        </div>
    );
};

export default Blog;