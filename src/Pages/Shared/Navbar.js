import React from 'react';
import { ExternalLink } from 'react-external-link';
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

                <div className="navbar-end">
                    <div className='text-center'>
                        <ExternalLink href="https://drive.google.com/uc?id=1OOtkAb9QgKfT3ljb6r3ZpeK3IIYHZoJ6&export=download">
                            <span className='btn btn-xs btn-success font' >Download Resume</span>
                        </ExternalLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;