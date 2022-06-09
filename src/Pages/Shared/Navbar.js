import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-success font-bold text-2xl'>Sadia</span>
                        <span className='text-white px-2 font-bold text-3xl'>Tuz</span>
                        <span className='text-success font-bold text-2xl'>Johora</span></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;