import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'react-external-link';
import { useParams } from 'react-router-dom';



const ProjectDetails = () => {
    const { id } = useParams();
    const [p, setP] = useState({});

    useEffect(() => {
        const url = `https://pacific-beach-59297.herokuapp.com/projects/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setP(data));
    }, []);

    return (
        <div>
            <div className="hero bg-base-200 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <img className='border-2 border-success p-2' style={{ width: '400px' }} src={p.img1} alt='' />
                        <img className='border-2 border-success p-2' style={{ width: '400px' }} src={p.img2} alt='' />
                        <img className='border-2 border-success p-2' style={{ width: '400px' }} src={p.img3} alt='' />
                        <img className='border-2 border-success p-2' style={{ width: '400px' }} src={p.img4} alt='' />
                    </div>
                    <div>
                        <h1 className="text-5xl text-secondary font-bold">{p.name}</h1>
                        <p className="py-6 text-success">{p.details1}</p>
                        <li className='py-2 text-success'> {p.details2}</li>
                        <li className='py-2 text-success'> {p.details3}</li>
                        <li className='py-2 text-success'> {p.details4}</li>
                        <li className='py-2 text-success'> {p.details5}</li>
                        <li className='py-2 text-success'> {p.details6}</li>
                        <li className='py-2 text-success'> {p.details7}</li>

                        <div className='mt-10 grid sm:grid-cols-1 place-items-center md:grid-cols-3 lg:flex'>
                            <ExternalLink className='my-2 lg:px-2' href={p.link}>
                                <span className='btn btn-outline btn-secondary font-bold'>Live Link</span>
                            </ExternalLink>
                            <ExternalLink className=' my-2 lg:px-2' href={p.code1}>
                                <span className='btn btn-outline btn-secondary font-bold'>Client Side</span>
                            </ExternalLink>
                            {
                                (p.code2) &&
                                <ExternalLink className='my-2 lg:px-2' href={p.code2}>
                                    <span className='btn btn-outline btn-secondary font-bold'>Server Side</span>
                                </ExternalLink>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};

export default ProjectDetails;