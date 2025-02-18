import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const FilterSearch = ( {blogList, setBlogList} ) => {
    
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isTopicOpen, setIsTopicOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('All Topics');
    const [selectedCategory, setSelectedCategory] = useState('Select Category');
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
    }, [searchQuery, selectedCategory, selectedTopic, blogList, setBlogList]);

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
    <div className='md:flex md:flex-wrap p-5 mt-5 gap-5'>
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
        <div ref={dropdownRefTopic} className='relative mt-4 w-full md:w-[48%] xl-w-auto xl:flex-1 xl:mt-0'>
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
        <div ref={dropdownRefCategory} className="relative mt-4 w-full md:w-[48%] xl:w-auto xl:flex-1 xl:mt-0">
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
  )
}

export default FilterSearch
