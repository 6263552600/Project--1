import React from 'react'
import myImage from '../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <nav className='w-full h-[8vh] bg-red-100 flex items-center justify-between px-20'>
                <div className="NavLogo w-[15%] h-full ">
                   <Link to='/'>
                   <img  className='h-[100%]' src={myImage} alt="Remote" />
                   </Link>
                </div>
                <div className="NavContent w-[70%] h-full  flex items-center  justify-center gap-10">
                   
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-blue-700 font-bold" : ""
                    } to='/service'>Service</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-blue-700 font-bold" : ""
                    } to='/doctors'>Doctors</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-blue-700 font-bold" : ""
                    } to='/howitworks'>How it works</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-blue-700 font-bold" : ""
                    } to='/reviews'>Reviews</NavLink>
                </div>
                 
                <div className="NavButton flex w-[15%] h-full justify-end items-center">
                    <button className='px-4 py-2 bg-blue-600 text-white rounded-md '>Book a meeting</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar