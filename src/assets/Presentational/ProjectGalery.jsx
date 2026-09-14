import react from 'react';
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGalery.css';
import ProjectList from '../ProjectList.js';

function ProjectGalery(props){
  const projectType = props.projectType;

  const projectsToDisplay = ProjectList.filter((project) => {if(projectType != "All"){return project.type == projectType}else{return true}});

  return  <section id="projects">
            <h3 className="sectionHeader" >Projects</h3>
            <div id="ProjectsGaleryGrid">
                {projectsToDisplay.map(projectListed => <ProjectCard project={projectListed} />)}
            </div>
          </section>
}

export default ProjectGalery;