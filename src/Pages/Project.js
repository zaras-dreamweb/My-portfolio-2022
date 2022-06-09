import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProject from '../hooks/useProject';

const Project = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useProject();

    const handleDetails = id => {
        navigate(`/project/${id}`)
    }
    return (
        <div>
            <h2 className='text-6xl text-success font-bold text-center py-10'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-1 place-items-center lg:grid-cols-3 gap-10'>
                {
                    projects.map(p => <p key={p._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={p.image} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-success">{p.name}</h2>
                                <p className=" text-accent">{p.description}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleDetails(p._id)} className="btn btn-success text-base-100 font-extrabold">View Details</button>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Project;