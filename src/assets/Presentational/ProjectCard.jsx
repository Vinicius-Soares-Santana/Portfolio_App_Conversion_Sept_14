import react from 'react';
import './ProjectCard.css';

function ProjectCard(props){

  const project = props.project;

  const playOrNot = (playvar) => {
    if(playvar || playvar == "true"){
      return  <div className="project-card">
            <img src={`${import.meta.env.BASE_URL}${project.image}`} />
            <h4 className="cardTitle" >{project.title}</h4>
            <p className="cardDescription">{project.description}</p>
            <button className="GitHub" onClick={()=>{window.open(project.github, "_blank")}}>GitHub</button>
            <button className="PlayTest" onClick={()=>{window.open(project.testLink, "_blank")}}>Test</button>
          </div>
    }else{
      return  <div className="project-card">
            <img src={`${import.meta.env.BASE_URL}${project.image}`} />
            <h4 className="cardTitle" >{project.title}</h4>
            <p className="cardDescription">{project.description}</p>
            <button className="GitHub" onClick={()=>{window.open(project.github, "_blank")}}>GitHub</button>
          </div>
    }
  }

  return playOrNot(project.testable);
  
}

export default ProjectCard;
