import React, { useRef, useState, useEffect } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const BlogList = ( {blogList} ) => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isTopicOpen, setIsTopicOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('All Topics');
    const [selectedCategory, setSelectedCategory] = useState('Select Category');
    const [blog, setBlogList] = useState(blogList);
    const [searchQuery, setSearchQuery] = useState("");

    const dropdownRefTopic = useRef(null);
    const dropdownRefCategory = useRef(null);
    
    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRefTopic.current &&
                !dropdownRefTopic.current.contains(event.target) &&
                dropdownRefCategory.current &&
                !dropdownRefCategory.current.contains(event.target)
            ) {
                setIsTopicOpen(false);
                setIsCategoryOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        let updatedList = blogList;

        // Filter by category
        if (selectedCategory !== "Select Category") {
            updatedList = updatedList.filter(blog => blog.blogCategory === selectedCategory);
        }

        // Filter by topic
        if (selectedTopic !== 'All Topics') {
            updatedList = updatedList.filter(blog => blog.blogTopic === selectedTopic);
        }

        // Apply search filter
        if (searchQuery) {
            updatedList = updatedList.filter(blog =>
                blog.blogTopic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.blogCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.blogTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.blogDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.blogPublishDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.publishBy.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setBlogList(updatedList);
    }, [searchQuery, selectedCategory, selectedTopic, blogList]);

    // Toggle dropdowns independently like a select box
    const toggleTopicDropdown = () => {
        setIsTopicOpen(!isTopicOpen);
        setIsCategoryOpen(false); // Close Category if Topic is opened
    };

    const toggleCategoryDropdown = () => {
        setIsCategoryOpen(!isCategoryOpen);
        setIsTopicOpen(false); // Close Topic if Category is opened
    };

    /**
     * Handle Topics Change
     *
     * @param {string} topic 
     */
    function handleTopicChange(topic) {
        setSelectedTopic(topic);
        setIsTopicOpen(false);
    }

    /**
     * Handle Category Change
     *
     * @param {string} category 
     */
    function handleCategoryChange(category) {
        setSelectedCategory(category);
        setIsCategoryOpen(false);
    }

    /**
     * Handle Text Search
     *
     * @param {mixed} event 
     */
    function handleSearch(event) {
        setSearchQuery(event.target.value);
    }


  return (
    <>
        <div className='md:flex md:flex-wrap p-5 mt-5'>
            <div className="relative w-full xl-w-auto xl:flex-1 xl:pr-4">
                <input 
                    type="search"
                    id="search"
                    className="p-3 border-b w-full outline-none search-cancel:appearance-none [&::-webkit-search-cancel-button]:hidden"
                    placeholder="Search here"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-600 text-3xl cursor-pointer" />
            </div>
            <div ref={dropdownRefTopic} className='relative mt-4 w-full md:w-1/2 xl-w-auto xl:flex-1 xl:mt-0 md:pr-4'>
                <div className="p-3 border-b border-b-neutral-800 w-full cursor-pointer flex justify-between items-center" onClick={toggleTopicDropdown}>
                    <span> {selectedTopic} </span>
                    <IoIosArrowDropdown className={`text-2xl transition-transform ${isTopicOpen ? "rotate-180" : ""}`} />
                </div>

                <AnimatePresence>
                    {isTopicOpen && (
                        <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute left-0 w-full bg-white border border-gray-300 shadow-md z-10 overflow-hidden"
                    >
                            <li 
                                className={`p-2 cursor-pointer ${selectedTopic === 'All Topics' ? 'text-orange-600' : 'hover:text-orange-600'}`} 
                                onClick={() => handleTopicChange('All Topics')}>
                                    All Topics
                            </li>
                            {blogList.map(({ blogTopic }, index) => (
                                <li
                                    key={blogTopic || index}
                                    className={`p-2 cursor-pointer ${selectedTopic === blogTopic ? 'text-orange-600' : 'hover:text-orange-600'}`}
                                    onClick={() => handleTopicChange(blogTopic)}
                                >
                                    {blogTopic}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
            <div ref={dropdownRefCategory} className="relative mt-4 w-full md:w-1/2 xl:w-auto xl:flex-1 xl:mt-0">
                <div className="p-3 border-b border-b-neutral-800 w-full cursor-pointer flex justify-between items-center" onClick={toggleCategoryDropdown}>
                    <span> {selectedCategory} </span>
                    <IoIosArrowDropdown className={`text-2xl transition-transform ${isCategoryOpen ? "rotate-180" : ""}`} />
                </div>

                <AnimatePresence>
                    {isCategoryOpen && (
                        <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute left-0 w-full bg-white border border-gray-300 shadow-md z-10 overflow-hidden"
                    >
                            <li 
                                className={`p-2 cursor-pointer ${selectedCategory === 'Select Category' ? 'text-orange-600' : 'hover:text-orange-600'}`}
                                onClick={() => handleCategoryChange('Select Category')}>
                                    Select Category
                            </li>
                            {blogList.map(({ blogCategory }, index) => (
                                <li
                                    key={blogCategory || index}
                                    className={`p-2 cursor-pointer ${selectedCategory === blogCategory ? 'text-orange-600' : 'hover:text-orange-600'}`}
                                    onClick={() => handleCategoryChange(blogCategory)}
                                >
                                    {blogCategory}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
        {blog.length > 0 ? (blog.map((blog, index) => (
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
                                    {blog.blogCategory}
                                </button>
                                <button className='p-2 rounded-md border border-gray-400 uppercase'>
                                    {blog.blogTopic}
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
        ))) : 
            <div className='text-center mt-10'>
                <h3 className='text-red-600'>Oops! No result found 🙁</h3>
            </div>
        }
    </>
)}

export default BlogList
