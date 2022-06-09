import React from 'react';
import { Link } from 'react-router-dom';
import ico from '../../image/iconee.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img style={{ height: '50px' }} src={ico} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-accent font-bold text-2xl'>Sadia</span>
                        <span className='text-white px-2 font-bold text-3xl'>Tuz</span>
                        <span className='text-accent font-bold text-2xl'>Johora</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;