import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ico from '../../image/iconee.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/about'>About Me</NavLink></li>
                            <li><NavLink to='/blog'>Blogs</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                    <img style={{ height: '50px' }} src={ico} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-accent font-bold text-2xl'>Sadia</span>
                        <span className='text-white px-2 font-bold text-3xl'>Tuz</span>
                        <span className='text-accent font-bold text-2xl'>Johora</span></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='px-2'><NavLink className='font-bold' to='/about'>About Me</NavLink></li>
                        <li className='px-2'><NavLink className='font-bold' to='/blog'>Blogs</NavLink></li>
                        <li className='px-2'><NavLink className='mr-16 font-bold' to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;