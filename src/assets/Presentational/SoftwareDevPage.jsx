import React from 'react';
import ProjectGalery from './ProjectGalery';

function SoftwareDevPage(porps){
  return( <div id="softwaredev" className="hidden body">

  <section id="presentation">
      <h2 id="mainTitle">./Software Dev</h2>
      <div id="preTitle" >
        <h3><span id="my-name">Hi, my name is Vinicius</span> <br/><span id="have-I-said">Have I said today that I'm a software developer yet?</span></h3>
      </div>
      <p id="mainText">As a junior software developer specialized in automations with python, I learned how to hear and translate
      business needs into softwares, already being proficient in HTML, CSS, Javascript, with some knowledge in C#
      and professional experience automating and creating simple softwares with Python and SQL. </p>
  </section>
  
  <section id="skillcards">
      <h3>Some of my skills:</h3>
      <div id="galeryskills">
           <div className="image-card">
              <img src="/Img_Sources/HTML5_logo.png"/>
          </div>
          <div className="image-card">
              <img src="./Img_Sources/CSS3_logo.png"/>
          </div>
          <div className="image-card">
              <img src="./Img_Sources/JavaScript_Logo.png"/>
          </div>
          <div className="image-card">
              <img src="https://images.icon-icons.com/2415/PNG/512/csharp_plain_logo_icon_146577.png"/>
          </div>
          <div className="image-card">
              <img src="./Img_Sources/Python_logo.png"/>
          </div>
          <div className="image-card" id="sql">
              <img src="./Img_Sources/Sql_logo.svg"/>
          </div>
      </div>
  </section>

  <ProjectGalery projectType="Software" />
</div>)
}

export default SoftwareDevPage;