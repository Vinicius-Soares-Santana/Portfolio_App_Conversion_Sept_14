import React from 'react';
import './AboutMe.css';

function AboutMe(props){
  return (<section id="meSection" className="body">
<h2 className="reference">./About Me</h2>
  <div id="mePic">
      <div id="frame1"></div>
      <div id="frame2"></div>
      <img src="/Img_Sources/Profile_Pic.jpg" id="profilePic"/>
  </div>
  <div id="aboutMe">
      <h3 className="title">About Me</h3>
      <p>
          Hey, my name is Vinicius,<br /> 
          I'm a brazilian living in Canada and venturing in a new career. My professional journey started in Brazil, where I graduated as a Mechatronics engineer and started working as a technician. That position made possible for me to start a pos-graduation in business and obtain a better possition in another company. As years passed by, I kept leaving aside my childhood dream of becoming a Game Designer, trating it barelly as a hobbie, until I moved to Canada. at that point, when my life, and carrer had to start over, all I could think was, why not now?<br />
          and that's how I got here, Currently studying software development and game design and starting a new carrer with coding and creating interactive experiences.
      </p>
  </div>
</section>)
}

export default AboutMe;