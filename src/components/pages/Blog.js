import React, { useState, useEffect } from 'react'
import { firestore } from '../../firebase'
import '../../styles/blog.css'
import BlogCard from '../cards/BlogCard'
import LoadingSpinner from '../LoadingSpinner';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading ,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        firestore.collection('BLOGS').get().then((querySnapshot) => {
            setBlogs(querySnapshot.docs.map((doc) => doc.data()))
            setLoading(false);
        }).catch((err) => console.log(err))
    }, []);


    console.log(blogs);
    return (
        <>
            <div className="blog-area">
                <div className="blog">
                    {blogs.length > 0 ? blogs.map((blog) => (
                        <BlogCard blog={blog} />
                    )) :
                    	loading ?
                    <LoadingSpinner />
                    : blogs.length <= 0 ?
                        <h1 className="h-64 flex items-center justify-center text-gray-400 text-2xl">No Blogs yet</h1>
                        : null}
                </div>
            </div>
        </>
    )
}

export default Blog
