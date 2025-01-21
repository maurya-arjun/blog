import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogList = ( {blogList} ) => {
  return (
    blogList.map((blog, index) => (
        <div className='md:flex md:flex-wrap mb-20 md:space-x-8 p-5 hover:lg:shadow-lg shadow-lg lg:shadow-none' key={index}>
            <div className='flex-shrink-0 md:w-1/2'>
                <Link to="/blogDetails" target='_blank'>
                    <img src={blog.blogImage} alt='Blog-Image' />
                </Link>
            </div>
            <div className='mt-5 md:mt-0 flex-1'>
                <div className='text-sm mb-5'>
                    <div className='xl:flex xl:flex-wrap md:justify-between'>
                        <div className='mb-5 xl:mb-0 text-[10px]'>
                            <button className='p-2 bg-pink-300 rounded-md mr-3 uppercase'>
                                Blog
                            </button>
                            <button className='p-2 rounded-md border border-gray-400 uppercase'>
                                Autonomous Retail
                            </button>
                        </div>
                        <div className='space-x-3'>
                            <span className='text-sm'>Share on: </span>
                            <FaLinkedinIn className='inline hover:text-orange-600 cursor-pointer text-lg' />
                            <FaFacebook className='inline hover:text-orange-600 cursor-pointer text-lg' />
                            <FaXTwitter className='inline hover:text-orange-600 cursor-pointer text-lg' />
                        </div>
                    </div>
                </div>
                <div className='text-lg'>
                    <Link to="/blogDetails" target='_blank'>
                        <h1 className='text-xl md:text-2xl mt-5 mb-5 font-bold lg:text-3xl'>
                            {blog.blogTitle}
                        </h1>
                    </Link>
                    <p className='text-md text-gray-600'>
                        <span className='italic'> {blog.blogPublishDate} </span>
                        <span className='border-r border-gray-500 ml-3 mr-3'></span>
                        {blog.blogDescription}
                    </p>
                    <p className='text-sm mt-5 text-gray-600'>
                    {(0.008 * blog.blogDescription.split(" ").filter((element)=>{return element.length!==0}).length).toFixed(1)} min read <span className='border-r border-gray-500 ml-2 mr-2'></span> By: {blog.publishBy}
                    </p>
                </div>
            </div>
        </div>
    )));
}

export default BlogList
