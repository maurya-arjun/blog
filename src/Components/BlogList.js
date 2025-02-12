import React, { useRef, useState, useEffect } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const BlogList = ( {blogList} ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTopicOpen, setIsTopicOpen] = useState(false);
    const categoryOptions = ["All Categories", "Category 1", "Category 2", "Category 3"];
    const topicOptions = ["All Topics", "Topic 1", "Topic 2", "Topic 3"];

    const dropdownRef = useRef(null);
    
    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  return (
    <>
        <div className='md:flex md:flex-wrap p-5 mt-5'>
            <div className="relative w-full xl-w-auto xl:flex-1 xl:pr-4">
                <input 
                    type="search"
                    id="search"
                    className="p-3 border-b w-full pr-10 outline-none"
                    placeholder="Search here"
                />
                <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-600 text-3xl" />
            </div>
            <div ref={dropdownRef} className='relative md:pr-0 mt-4 w-full md:w-1/2 xl-w-auto xl:flex-1 xl:mt-0'>
                <div className="p-3 border-b border-b-neutral-800 w-full cursor-pointer flex justify-between items-center" onClick={() => setIsTopicOpen(!isTopicOpen)}>
                    <span>Topic</span>
                    <IoIosArrowDropdown className={`text-2xl transition-transform ${isTopicOpen ? "rotate-180" : ""}`} />
                </div>

                <AnimatePresence>
                    {isTopicOpen && (
                        <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isTopicOpen ? "auto" : 0, opacity: isTopicOpen ? 1 : 0 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute left-0 w-full bg-white border border-gray-300 shadow-md z-10 overflow-hidden"
                    >
                            {topicOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className="p-2 hover:text-orange-600 cursor-pointer"
                                    transition={{duration: 0.4}}
                                    onClick={() => setIsTopicOpen(false)}
                                >
                                    {option}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
            <div ref={dropdownRef} className="relative md:pl-2 mt-4 w-full md:w-1/2 xl:w-auto xl:flex-1 xl:mt-0">
                <div className="p-3 border-b border-b-neutral-800 w-full cursor-pointer flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
                    <span>Select Category</span>
                    <IoIosArrowDropdown className={`text-2xl transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute w-full bg-white border border-gray-300 shadow-md z-10 overflow-hidden"
                    >
                            {categoryOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className="p-2 hover:text-orange-600 cursor-pointer"
                                    transition={{duration: 0.4}}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {option}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
        {blogList.map((blog, index) => (
        <div className='md:flex md:flex-wrap mb-20 mt-10 md:space-x-8 p-5 hover:lg:shadow-lg shadow-lg lg:shadow-none' key={index}>
            <div className='flex-shrink-0 md:w-1/2'>
                <Link to="/blogDetails">
                    <img src={blog.blogImage} alt='Blog-Image' className='w-full' />
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
                        <div className="space-x-0 flex items-center">
                            <span className="text-sm">Share on:</span>
                            {[
                                <FaLinkedinIn className="hover:text-orange-600 cursor-pointer text-lg ml-3" />,
                                <FaFacebook className="hover:text-orange-600 cursor-pointer text-lg" />,
                                <FaXTwitter className="hover:text-orange-600 cursor-pointer text-lg" />,
                            ].map((icon, index, arr) => (
                                <span key={index} className="flex items-center">
                                    {icon}
                                    {index !== arr.length - 1 && (
                                        <span className="mx-2 bg-gray-400 inline-block w-[1px] h-[20px]"></span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='text-lg'>
                    <Link to="/blogDetails">
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
        ))};
    </>
    
)}

export default BlogList
