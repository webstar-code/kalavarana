import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = (props) => {
    console.log(props);
    return (
        <Link to={`/blog/${props.blog.id}`}>
            <div className="w-3/4 flex flex-col items-start justify-start mt-12 mb-12 md:flex-row mx-auto">
                <div className="w-full md:w-80 mr-0 md:mr-8">
                    <img src={props.blog.picUrl} className="w-full h-full" />
                </div>
                <div className="blog-des">
                    <h1 className="py-2 pb-5 text-2xl md:text-2xl">{props.blog.title}</h1>
                    <p>{props.blog.paragraphs[0]}</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard
