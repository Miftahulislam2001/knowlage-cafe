
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';

const Blog = (props) => {

    const readingTime = props.readingTime;
    const setReadingTime = props.setReadingTime;
    const bookmarkedItem = props.bookmarkedItem;
    const setBookmarkedItem = props.setBookmarkedItem;
    const [blogs, setBlogs] = useState([]);


    // Reading Time Function ...
    const countReadingTime = (blog) =>{
        const time = readingTime + blog.readTime;
        setReadingTime(time)
    }

    // Add Bookmarks Function...
    const addToBookmark = (title) =>{
        const previous = [...bookmarkedItem]
        if(previous.includes(title)){
            alert('You Have Already Bookmarked this item')
        }
        else{

            const newBookmarked = [...bookmarkedItem, title]
            setBookmarkedItem(newBookmarked)
        }
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