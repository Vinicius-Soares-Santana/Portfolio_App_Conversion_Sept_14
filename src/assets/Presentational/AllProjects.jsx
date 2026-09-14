import React from 'react';
import { Link } from 'react-router-dom';
import ProjectGalery from './ProjectGalery';

function AllProjects(props) {

  return (
    <div className="AllProjectsDiv body">
      <ProjectGalery projectType="All" />
    </div>
  );
}

export default AllProjects;
