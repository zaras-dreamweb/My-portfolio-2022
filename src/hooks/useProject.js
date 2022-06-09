import { useEffect, useState } from "react"

const useProject = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://pacific-beach-59297.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    return [projects, setProjects];
}

export default useProject;