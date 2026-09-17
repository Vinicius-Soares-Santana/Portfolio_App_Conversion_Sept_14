import React from 'react';
import ProjectGalery from './ProjectGalery';


function GameDevPage(props){
  return(<div id="gamedesign" className="hidden body">

  <section id="presentation">
      <h2 id="mainTitle">./Game Dev</h2>
      <div id="preTitle" >
      <h3><span id="my-name">Hi, my name is Vinicius</span> <br/><span id="have-I-said">Have I said today that I wanna be a game developer yet?</span></h3>
      </div>
      <p id="mainText"> As an amateur game designer, I developed a lot of RPG adventures for friends and some small unity projects for training. Games have always been something I'm passionate about and the idea of someday working with that makes me really excited. </p>
  </section>
  
  <section id="skillcards" className="gameCardSection">
      <h3>Some of my skills:</h3>
      <div id="galeryskills">
           <div className="image-card">
              <img src={`${import.meta.env.BASE_URL}Img_Sources/HTML5_logo.png`}/>
          </div>
          <div className="image-card">
              <img src={`${import.meta.env.BASE_URL}Img_Sources/CSS3_logo.png`}/>
          </div>
          <div className="image-card">
              <img src={`${import.meta.env.BASE_URL}Img_Sources/JavaScript_Logo.png`}/>
          </div>
          <div className="image-card">
              <img src="https://images.icon-icons.com/2415/PNG/512/csharp_plain_logo_icon_146577.png"/>
          </div>
          <div className="image-card">
              <img src={`${import.meta.env.BASE_URL}Img_Sources/Official_unity_logo.png`}/>
          </div>
          <div className="image-card" id="react">
              <img src={`${import.meta.env.BASE_URL}react.svg`}/>
          </div>
      </div>
  </section>

  <ProjectGalery projectType="Game" />

</div>
)
}

export default GameDevPage;
