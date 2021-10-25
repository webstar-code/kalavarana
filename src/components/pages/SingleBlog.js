import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../../firebase'
import Footer from '../Footer';

const SingleBlog = () => {
    const [blog, setBlog] = useState({});
    const blogId = useParams().id;
    
    useEffect(() => {
        firestore.collection('BLOGS').doc(blogId).get().then((doc) => {
            setBlog(doc.data());
        }).catch((err) => console.log(err))
    }, []);
    console.log(blog)

    return (
        <>
            <div className="single-blog mb-12">
                <img src={blog.picUrl} alt="" />
                <div className="single-blog-des">
                    {/* <div className="bg-black p-2 text-white">FASHION</div> */}
                    <h1 className="py-4">{blog.title}</h1>
                    {blog.paragraphs && blog.paragraphs.map((para) => (
                        <p>{para}</p>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleBlog
