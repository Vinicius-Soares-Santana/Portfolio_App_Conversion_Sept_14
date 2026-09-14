import React from 'react';
import './IntroductionScreen.css';
import { useNavigate } from 'react-router-dom';

function IntroductionScreen(props){

    const navigate = useNavigate();

  function handleClick(event){
    const buttonId = event.target.id;

    if(buttonId == "software"){
      navigate("/main/");
    }
    if(buttonId == "design"){
      navigate("/main/gamedev");
    }
    if(buttonId == "all"){
      navigate("/main/allprojects");
    }
  }


  return(
    <div id="introduction">
          <div className="stars"></div>
          <div className="content">
              <button id="software" onClick={handleClick}>Software Development</button>
              <button id="design" onClick={handleClick}>Game Design</button>
              <button id="all" onClick={handleClick}>View All</button>
          </div>
      </div>
  )
}

export default IntroductionScreen;