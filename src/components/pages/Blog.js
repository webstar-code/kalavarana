import React ,{useState, useEffect} from 'react'
import { firestore } from '../../firebase'
import '../../styles/blog.css'
import BlogCard from '../cards/BlogCard'
import Header from '../Header'

const Blog = () => {
    const [blogs, setBlogs] = useState([]); 

    useEffect(() => {
        let items = [];
        firestore.collection('BLOGS').get().then((querySnapshot) => {
            setBlogs(querySnapshot.docs.map((doc) => doc.data()))
        }).catch((err) => console.log(err))
    }, []);


    console.log(blogs);
    return (
        <>
        <div className="blog-area">
            <div className="blog">
                {blogs.map((blog) => (
                    <BlogCard blog={blog}/>
                ))}
                {/* <BlogCard/>
                <BlogCard/> */}
            </div>
        </div>
        </>
    )
}

export default Blog
