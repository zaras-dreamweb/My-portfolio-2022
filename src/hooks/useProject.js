import { useEffect, useState } from "react"

const useProject = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    return [projects, setProjects];
}

export default useProject;