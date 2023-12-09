
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';

const Blog = (blog) => {
    const [blogs, setBlogs] = useState([]);

    // Reading Time Function ...
    const countReadingTime = (blog) =>{
        console.log(blog);
    }
    
    // Add Bookmarks Function...
    const addToBookmark = (title) =>{
        console.log(title);
    }

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='col-span-2'>
            {
                blogs.map(blog => <Card blog = {blog} key = {blog.id} countReadingTime = {countReadingTime} addToBookmark={addToBookmark}></Card>)
            }
        </div>
    );
};

export default Blog;