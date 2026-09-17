import react from 'react';
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGalery.css';

function ProjectGalery(props){
  const [projectList, setProjectList] = useState([]);
  const projectType = props.projectType;

  useEffect(()=>{
    const retrieveProjects = async() => {
      const projectResponse = await fetch(`${import.meta.env.BASE_URL}ProjectList.json`);
      const currentProjectList = await projectResponse.json();
      setProjectList(currentProjectList);
    }
    retrieveProjects();
    
  }, []);
  

  const projectsToDisplay = projectList.filter((project) => {if(projectType != "All"){return project.type == projectType}else{return true}});

  return  <section id="projects">
            <h3 className="sectionHeader" >Projects</h3>
            <div id="ProjectsGaleryGrid">
                {projectsToDisplay.map(projectListed => <ProjectCard project={projectListed} />)}
            </div>
          </section>
}

export default ProjectGalery;
