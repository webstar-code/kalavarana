import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {

    var sectionStyle = {
        backgroundImage: "url(" + props.blog.picUrl + ")",
    };
    return (
        <div className="w-full flex flex-col mt-12 mb-12 sm:flex-row mx-auto">
            <Link to={`/blog/${props.blog.id}`}>
                <div className="blog-img h-64 mr-10"style={sectionStyle}>
                </div>
            </Link>
            <div className="blog-des">
                <h1 className="py-2 pb-5 text-2xl">{props.blog.title}</h1>
                <p>{props.blog.paragraphs[0]}</p>
            </div>
        </div >
    )
}

export default BlogCard
