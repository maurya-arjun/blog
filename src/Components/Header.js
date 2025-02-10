import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import logo from "../Images/blog-1.jpg"

const Header = ( {menuLinks} ) => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    <nav className="sticky top-0 z-50 py-3 bg-black text-white border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} className='h-10 w-10 mr-2 rounded-full' alt="logo" />
                    <span className="text-xl tracking-tighter bg-gradient-to-br from-orange-200 to-orange-500 text-transparent bg-clip-text">bLogs</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {menuLinks.map((menu, index) => (
                        <li className={`hover:text-orange-700 ${menu.isActive ? 'text-orange-700' : ''}`}>
                            <Link to={menu.href} > {menu.label} </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <Link to="/" className='py-2 px-3 border rounded-md'>
                        Sing in
                    </Link>
                    <Link to="/" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Create an account
                    </Link>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end text-2xl">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <RxCross1 /> : <IoMdMenu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 bg-black text-white z-20 w-full p-12 flex flex-col justify-end items-end text-lg mt-3 border-t lg:hidden">
                    <ul className="mb-10 text-center space-y-5">
                        {menuLinks.map((menu, index) => (
                            <li className={`hover:text-orange-700 ${menu.isActive ? 'text-orange-700' : ''}`}>
                                <Link to={menu.href} > {menu.label} </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <Link to="/" className='py-2 px-3 border rounded-md text-center'>
                            Sing in
                        </Link>
                        <Link to="/" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-center'>
                            Create an account
                        </Link>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Header
