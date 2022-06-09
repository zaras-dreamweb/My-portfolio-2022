import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'react-external-link';
import { useParams } from 'react-router-dom';



const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/projects/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data));
    }, []);

    return (
        <div>
            <div class="hero bg-base-200 mt-10">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <div className='grid lg:grid-cols-1 gap-5'>
                        <img className='border-2 border-success p-2' style={{ width: '1500px' }} src={project.image} alt='' />
                        <img className='border-2 border-success p-2' style={{ width: '1500px' }} src={project.img} alt='' />
                    </div>
                    <div>
                        <h1 class="text-5xl text-secondary font-bold">{project.name}</h1>
                        <p class="py-6 text-success">{project.details}</p>
                        <div>
                            <ExternalLink href={project.link}>
                                <span className='btn btn-outline btn-secondary font-bold'>Live Link</span>
                            </ExternalLink>
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