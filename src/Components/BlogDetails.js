import React from 'react'
import { IoChevronBack } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blogImage1 from '../Images/blog-1.jpg';

const BlogDetails = () => {
  return (
        <>
            <div className='bg-black p-5 space-y-5'>
                <button className='text-lg text-white'>
                    <IoChevronBack className='inline' /> Back To Insights
                </button>
                <button className='p-2 rounded-md uppercase bg-white block text-xs mt-3'>
                    Autonomous Retail
                </button>
                <h1 className='mt-3 text-3xl text-white font-bold'>
                    Real-Life Examples of Autonomous Retail Success Stories
                </h1>
                <p className='text-sm mt-5 text-white'>
                    4 min read <span className='border-r border-white ml-2 mr-2'></span> By: Publisher name
                </p>
                <div className='space-x-3 text-white mt-4 mb-4'>
                    <span className='text-sm'>Share on: </span>
                    <FaLinkedinIn className='inline hover:text-orange-600 cursor-pointer text-lg' />
                    <FaFacebook className='inline hover:text-orange-600 cursor-pointer text-lg' />
                    <FaXTwitter className='inline hover:text-orange-600 cursor-pointer text-lg' />
                </div>
                <p className='text-white'>
                    2 Jaunary, 2025
                </p>
            </div>
            <div className='m-5'>
                <img src={blogImage1} alt='blog-image'  />
            </div>
            <div className='m-5'>
                <h1 className='text-4xl mb-5'>Table of Content</h1>
                <ul className='list-disc ml-5 space-y-3 text-lg'>
                    <li>
                        <a href='/' className='hover:text-orange-600'>
                            Overview
                        </a>
                    </li>
                    <hr />
                    <li>
                        <a href='/' className='hover:text-orange-600'>
                            5 Success Stories Depicting Autonomous Retail Transformatio
                        n</a>
                    </li>
                    <hr />
                    <li>
                        <a href='/' className='hover:text-orange-600'>
                            What Make These Stores Successful?
                        </a>
                    </li>
                    <hr />
                    <li>
                        <a href='/' className='hover:text-orange-600'>
                            Conclusion
                        </a>
                    </li>
                    <hr />
                </ul>
            </div>
        </>
  )
}

export default BlogDetails
