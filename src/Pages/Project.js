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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    projects.map(p => <p key={p._id}>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img src={p.image} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title text-success">{p.name}</h2>
                                <p class=" text-accent">{p.description}</p>
                                <div class="card-actions">
                                    <button onClick={() => handleDetails(p._id)} class="btn btn-success text-base-100">View Details</button>
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