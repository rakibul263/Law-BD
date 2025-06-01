import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className='max-w-7xl mx-auto mt-10 gap-3.5'>
            {
                data.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;