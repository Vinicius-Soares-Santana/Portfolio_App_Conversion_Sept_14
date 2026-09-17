import React from 'react';
import './Contact.css';

function ContactPage(props){
  return(<section id="information" className="body">
  <h2 id="Reference">./Contact Me</h2>
  <h2 id="Title">Contact Me</h2>

  <img src={`${import.meta.env.BASE_URL}Img_Sources/Email_logo.png`} id="emailLogo"/>
  <div className="info-card" id="emailId">
      <h2>Email</h2>
      <p>vinicius.soaresds@outlook.com</p>
  </div>

  <img src={`${import.meta.env.BASE_URL}Img_Sources/LinkedIn_logo.png`} id="linkedinLogo"/>
  <div className="info-card" id="linkedinId">
      
      <h2>LinkedIn</h2>
      <p><a href="github.com/Vinicius-Soares-Santana"target="_blank">linkedin.com/in/vinisoaressantana</a></p>
  </div>

  <img src={`${import.meta.env.BASE_URL}Img_Sources/Instagram icon.png`} id="instagramLogo"/>
  <div className="info-card" id="instagramId">
      <h2>Instagram</h2>
      <p>@vinisoaressantana</p>
  </div>

  <img src={`${import.meta.env.BASE_URL}Img_Sources/GithubLogo.svg.webp`} id="githubLogo"/>
  <div className="info-card" id="githubId">
      <h2>Github</h2>
      <p><a href="github.com/Vinicius-Soares-Santana" target="_blank">github.com/Vinicius-Soares-Santana</a></p>
  </div>
  
</section>)
}

export default ContactPage;
